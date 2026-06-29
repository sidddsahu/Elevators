
'use client'

import {
  FolderKanban,
  Plus,
  Search,
  Trash2,
  Edit,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Calendar,
  Tag,
  Grid3x3,
  Loader2,
  Filter,
  AlertCircle,
  CheckCircle,
  Download,
  FileText,
  FileSpreadsheet,
  ExternalLink
} from 'lucide-react'
import { useEffect, useState, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  clearProjectState
} from '../../../store/slices/projectSlice'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ToastNotification from '../components/ToastNotification'
import type { AppDispatch } from '../../../store'

/* =====================================================
   TYPES & INTERFACES
===================================================== */

export interface Project {
  _id: string
  title: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  liveUrl: string
  githubUrl: string
  tags: string[]
  features: string[]
  challenges: string[]
  status: 'active' | 'inactive' | 'draft'
  displayOrder: number
  startDate: string
  endDate: string
  createdAt?: string
  updatedAt?: string
}

export type ProjectFormData = Omit<Project, '_id' | 'createdAt' | 'updatedAt'>

interface SortConfig {
  key: keyof Project | 'dates'
  direction: 'asc' | 'desc'
}

interface ToastState {
  show: boolean
  message: string
  type: 'success' | 'error'
}

interface PaginationState {
  total: number
  page: number
  limit: number
  totalPages: number
}

interface ProjectsReduxState {
  projects: Project[]
  pagination: PaginationState
  loading: boolean
  error: string | null
}

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  render?: (row: Project) => React.ReactNode
}

/* =====================================================
   TAG INPUT COMPONENT
===================================================== */

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
}

function TagInput({ tags, onChange, placeholder }: TagInputProps) {
  const [input, setInput] = useState<string>('')

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const newTag = input.trim()
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag])
      }
      setInput('')
    }
  }

  const removeTag = (index: number) => {
    onChange(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="border rounded-lg p-2 min-h-[42px]">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-yellow-800 rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="hover:text-blue-900"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={handleAddTag}
        placeholder={placeholder ?? 'Type and press Enter or comma to add...'}
        className="w-full outline-none px-1"
      />
    </div>
  )
}

/* =====================================================
   PROJECT FORM MODAL
===================================================== */

interface ProjectModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: ProjectFormData) => void
  loading: boolean
  initialData: Project | null
}

function ProjectModal({ open, onClose, onSubmit, loading, initialData }: ProjectModalProps) {
  const [form, setForm] = useState<ProjectFormData>({
    title: '',
    description: '',
    fullDescription: '',
    image: '',
    images: [],
    liveUrl: '',
    githubUrl: '',
    tags: [],
    features: [],
    challenges: [],
    status: 'active',
    displayOrder: 0,
    startDate: '',
    endDate: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ProjectFormData, string>>>({})

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        description: initialData.description,
        fullDescription: initialData.fullDescription,
        image: initialData.image,
        images: initialData.images ?? [],
        liveUrl: initialData.liveUrl,
        githubUrl: initialData.githubUrl,
        tags: initialData.tags ?? [],
        features: initialData.features ?? [],
        challenges: initialData.challenges ?? [],
        status: initialData.status,
        displayOrder: initialData.displayOrder,
        startDate: initialData.startDate?.slice(0, 10) ?? '',
        endDate: initialData.endDate?.slice(0, 10) ?? ''
      })
    } else {
      setForm({
        title: '',
        description: '',
        fullDescription: '',
        image: '',
        images: [],
        liveUrl: '',
        githubUrl: '',
        tags: [],
        features: [],
        challenges: [],
        status: 'active',
        displayOrder: 0,
        startDate: '',
        endDate: ''
      })
    }
    setErrors({})
  }, [initialData, open])

  const validateForm = (): Partial<Record<keyof ProjectFormData, string>> => {
    const newErrors: Partial<Record<keyof ProjectFormData, string>> = {}
    if (!form.title.trim()) newErrors.title = 'Title is required'
    if (!form.description.trim()) newErrors.description = 'Description is required'
    if (!form.image.trim()) newErrors.image = 'Main image URL is required'
    if (!form.startDate) newErrors.startDate = 'Start date is required'
    if (form.endDate && new Date(form.endDate) < new Date(form.startDate)) {
      newErrors.endDate = 'End date must be after start date'
    }
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ProjectFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleTagChange = (field: keyof ProjectFormData, value: string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddImageUrl = () => {
    const url = prompt('Enter image URL:')
    if (url?.trim()) {
      setForm((prev) => ({ ...prev, images: [...prev.images, url.trim()] }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    onSubmit(form)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {initialData ? 'Edit Project' : 'Create New Project'}
            </h2>
            <p className="text-sm text-gray-600">Fill in the project details below</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">Title *</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter project title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  Short Description *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.description ? 'border-red-500' : ''
                  }`}
                  placeholder="Brief description (appears in lists)"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  Full Description *
                </label>
                <textarea
                  name="fullDescription"
                  value={form.fullDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Detailed project description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  Main Image URL *
                </label>
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.image ? 'border-red-500' : ''
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.startDate ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.endDate ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-1">Live URL</label>
                  <input
                    name="liveUrl"
                    value={form.liveUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://project-live.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">GitHub URL</label>
                  <input
                    name="githubUrl"
                    value={form.githubUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://github.com/user/project"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-semibold text-black">Tags</label>
                  <span className="text-xs text-gray-500">Press Enter or comma to add</span>
                </div>
                <TagInput
                  tags={form.tags}
                  onChange={(tags) => handleTagChange('tags', tags)}
                  placeholder="Add technology tags..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">Features</label>
                <TagInput
                  tags={form.features}
                  onChange={(features) => handleTagChange('features', features)}
                  placeholder="Add project features..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  Challenges & Solutions
                </label>
                <TagInput
                  tags={form.challenges}
                  onChange={(challenges) => handleTagChange('challenges', challenges)}
                  placeholder="Add challenges faced..."
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-semibold text-black">
                    Additional Images
                  </label>
                  <button
                    type="button"
                    onClick={handleAddImageUrl}
                    className="text-sm text-yellow-400 hover:text-yellow-800"
                  >
                    + Add URL
                  </button>
                </div>
                <div className="border rounded-lg p-3 space-y-2 max-h-32 overflow-y-auto">
                  {form.images.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-2">
                      No additional images added
                    </p>
                  ) : (
                    form.images.map((url, index) => (
                      <div key={index} className="flex items-center justify-between group">
                        <span className="text-sm text-gray-600 truncate">{url}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleTagChange(
                              'images',
                              form.images.filter((_, i) => i !== index)
                            )
                          }
                          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-1">Status</label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    name="displayOrder"
                    value={form.displayOrder}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t px-6 py-4 bg-gray-50">
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {initialData ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>{initialData ? 'Update Project' : 'Create Project'}</>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

/* =====================================================
   CONFIRMATION MODAL
===================================================== */

interface ConfirmModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

function ConfirmModal({ open, onClose, onConfirm, title, message }: ConfirmModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   EXPORT BUTTONS COMPONENT
===================================================== */

interface ExportButtonsProps {
  data: Project[]
}

function ExportButtons({ data }: ExportButtonsProps) {
  const downloadRef = useRef<HTMLAnchorElement>(null)

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item) => ({
        Title: item.title,
        Description: item.description,
        Status: item.status,
        'Start Date': item.startDate ? new Date(item.startDate).toLocaleDateString() : '',
        'End Date': item.endDate ? new Date(item.endDate).toLocaleDateString() : '',
        Tags: item.tags?.join(', '),
        Features: item.features?.join(', '),
        'Live URL': item.liveUrl,
        'GitHub URL': item.githubUrl,
        'Display Order': item.displayOrder,
        'Created At': item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''
      }))
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Projects')
    XLSX.writeFile(workbook, `projects_${new Date().toISOString().split('T')[0]}.xlsx`)
  }

  const exportToPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(20)
    doc.setTextColor(30, 64, 175)
    doc.text('Projects Report', 105, 20, { align: 'center' })

    doc.setFontSize(11)
    doc.setTextColor(100, 116, 139)
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' })

    doc.setFontSize(10)
    doc.setTextColor(71, 85, 105)
    const activeCount = data.filter((p) => p.status === 'active').length
    const draftCount = data.filter((p) => p.status === 'draft').length
    doc.text(
      `Total Projects: ${data.length} | Active: ${activeCount} | Draft: ${draftCount}`,
      14,
      45
    )

    const tableData = data.map((item) => [
      item.title,
      (item.description?.substring(0, 50) ?? '') +
        (item.description?.length > 50 ? '...' : ''),
      item.status.charAt(0).toUpperCase() + item.status.slice(1),
      item.startDate ? new Date(item.startDate).toLocaleDateString() : '-',
      item.tags?.slice(0, 3).join(', ') || 'None',
      item.displayOrder
    ])

    ;(doc as jsPDF & { autoTable: Function }).autoTable({
      head: [['Project Name', 'Description', 'Status', 'Start Date', 'Tags', 'Order']],
      body: tableData,
      startY: 55,
      theme: 'grid',
      headStyles: {
        fillColor: [30, 64, 175],
        textColor: [255, 255, 255],
        fontSize: 10,
        fontStyle: 'bold'
      },
      bodyStyles: { fontSize: 9 },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      margin: { top: 55 }
    })

    doc.save(`projects_report_${new Date().toISOString().split('T')[0]}.pdf`)
  }

  const exportToCSV = () => {
    const headers = [
      'Title',
      'Description',
      'Status',
      'Start Date',
      'End Date',
      'Tags',
      'Features',
      'Live URL',
      'GitHub URL',
      'Display Order'
    ]

    const csvData = [
      headers,
      ...data.map((item) => [
        `"${item.title}"`,
        `"${item.description}"`,
        `"${item.status}"`,
        `"${item.startDate ? new Date(item.startDate).toLocaleDateString() : ''}"`,
        `"${item.endDate ? new Date(item.endDate).toLocaleDateString() : ''}"`,
        `"${item.tags?.join('; ')}"`,
        `"${item.features?.join('; ')}"`,
        `"${item.liveUrl}"`,
        `"${item.githubUrl}"`,
        `"${item.displayOrder}"`
      ])
    ]

    const csvContent = csvData.map((row) => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    if (downloadRef.current) {
      downloadRef.current.href = url
      downloadRef.current.download = `projects_${new Date().toISOString().split('T')[0]}.csv`
      downloadRef.current.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={exportToExcel}
        className="px-4 py-2.5 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 text-sm font-medium flex items-center gap-2 transition-colors"
      >
        <FileSpreadsheet className="w-5 h-5" />
        Export Excel
      </button>
      <button
        onClick={exportToPDF}
        className="px-4 py-2.5 bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 text-sm font-medium flex items-center gap-2 transition-colors"
      >
        <FileText className="w-5 h-5" />
        Export PDF
      </button>
      <button
        onClick={exportToCSV}
        className="px-4 py-2.5 bg-blue-50 text-yellow-400 border border-blue-200 rounded-lg hover:bg-blue-100 text-sm font-medium flex items-center gap-2 transition-colors"
      >
        <Download className="w-5 h-5" />
        Export CSV
      </button>
      <a ref={downloadRef} className="hidden" />
    </div>
  )
}

/* =====================================================
   DATATABLE COMPONENT
===================================================== */

interface DataTableProps {
  columns: TableColumn[]
  data: Project[]
  loading: boolean
  sortConfig: SortConfig
  onSort: (key: keyof Project | 'dates') => void
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
}

function DataTable({
  columns,
  data,
  loading,
  sortConfig,
  onSort,
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage
}: DataTableProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  interface SortableHeaderProps {
    column: string
    label: string
    sortable?: boolean
  }

  const SortableHeader = ({ column, label, sortable = true }: SortableHeaderProps) => (
    <th
      className="px-4 py-3 text-left cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-700"
      onClick={() => sortable && onSort(column as keyof Project)}
    >
      <div className="flex items-center gap-1">
        {label}
        {sortable && sortConfig.key === column && (
          sortConfig.direction === 'asc' ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )
        )}
      </div>
    </th>
  )

  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <Loader2 className="animate-spin text-yellow-400" size={32} />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {columns.map((column, index) => (
                    <SortableHeader
                      key={index}
                      column={column.key}
                      label={column.label}
                      sortable={column.sortable !== false}
                    />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((row, rowIndex) => (
                  <tr
                    key={row._id ?? rowIndex}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="px-4 py-4">
                        {column.render ? column.render(row) : String(row[column.key as keyof Project] ?? '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.length === 0 && (
            <div className="text-center py-12">
              <FolderKanban className="mx-auto text-gray-300" size={48} />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No projects found</h3>
              <p className="text-gray-500 mt-1">Create your first project to get started</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="border-t px-6 py-4 bg-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-medium">{startItem}</span> to{' '}
                  <span className="font-medium">{endItem}</span> of{' '}
                  <span className="font-medium">{totalItems}</span> projects
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum = i + 1
                      if (totalPages > 5) {
                        if (currentPage > 3) pageNum = currentPage - 3 + i
                        if (currentPage > totalPages - 2) pageNum = totalPages - 4 + i
                        pageNum = Math.max(1, Math.min(totalPages, pageNum))
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => onPageChange(pageNum)}
                          className={`w-9 h-9 rounded-lg transition-colors ${
                            currentPage === pageNum
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

/* =====================================================
   STATUS BADGE COMPONENT
===================================================== */

interface StatusBadgeProps {
  status: Project['status']
}

type StatusConfig = {
  bg: string
  text: string
  icon: React.ElementType
  label: string
}

function StatusBadge({ status }: StatusBadgeProps) {
  const config: Record<Project['status'], StatusConfig> = {
    active: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      icon: CheckCircle,
      label: 'Active'
    },
    inactive: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      icon: X,
      label: 'Inactive'
    },
    draft: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      icon: Edit,
      label: 'Draft'
    }
  }

  const { bg, text, icon: Icon, label } = config[status] ?? config.inactive

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${bg} ${text}`}
    >
      <Icon size={12} />
      {label}
    </span>
  )
}

/* =====================================================
   MAIN PAGE
===================================================== */

export default function ProjectsPage() {
  const dispatch = useDispatch<AppDispatch>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { projects, pagination, loading, error } = useSelector(
    (s: any) => s.projects as ProjectsReduxState
  )

  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [editProject, setEditProject] = useState<Project | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'displayOrder',
    direction: 'asc'
  })
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' })

  const itemsPerPage = 10

  useEffect(() => {
    dispatch(fetchProjects({ page, limit: itemsPerPage }))
  }, [dispatch, page])

  useEffect(() => {
    if (error) {
      showToast(error, 'error')
    }
  }, [error])

  useEffect(() => {
    return () => {
      dispatch(clearProjectState())
    }
  }, [dispatch])

  const showToast = (message: string, type: ToastState['type'] = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }))
    }, 3000)
  }

  const handleCreateOrUpdate = async (data: ProjectFormData) => {
    try {
      const payload: ProjectFormData = {
        ...data,
        tags: data.tags,
        features: data.features,
        challenges: data.challenges,
        images: data.images
      }

      if (editProject) {
        await dispatch(
          updateProject({ id: editProject._id, projectData: payload })
        ).unwrap()
        showToast('Project updated successfully!', 'success')
      } else {
        await dispatch(createProject(payload)).unwrap()
        showToast('Project created successfully!', 'success')
      }

      setOpenModal(false)
      setEditProject(null)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Operation failed!'
      showToast(message, 'error')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteProject(id)).unwrap()
      showToast('Project deleted successfully!', 'success')
      setDeleteConfirm(null)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Delete failed!'
      showToast(message, 'error')
    }
  }

  const handleSort = (key: keyof Project | 'dates') => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const filteredProjects = useMemo<Project[]>(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title?.toLowerCase().includes(search.toLowerCase()) ||
        project.description?.toLowerCase().includes(search.toLowerCase()) ||
        project.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
        project.features?.some((feature) =>
          feature.toLowerCase().includes(search.toLowerCase())
        )

      const matchesStatus = statusFilter === 'all' || project.status === statusFilter

      return matchesSearch && matchesStatus
    })

    return filtered.sort((a, b) => {
      const key = sortConfig.key as keyof Project

      let aValue: Date | string | number | string[] | undefined = a[key]
      let bValue: Date | string | number | string[] | undefined = b[key]

      if (key === 'startDate' || key === 'endDate' || key === 'createdAt') {
        const aDate = new Date((aValue as string) || 0)
        const bDate = new Date((bValue as string) || 0)
        return sortConfig.direction === 'asc'
          ? aDate.getTime() - bDate.getTime()
          : bDate.getTime() - aDate.getTime()
      }

      if (aValue === undefined || aValue === null) aValue = ''
      if (bValue === undefined || bValue === null) bValue = ''

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [projects, search, statusFilter, sortConfig])

  const paginatedProjects = useMemo<Project[]>(() => {
    const startIndex = (page - 1) * itemsPerPage
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProjects, page])

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  const tableColumns: TableColumn[] = [
    {
      key: 'title',
      label: 'Project',
      render: (project: Project) => (
        <div className="flex items-center gap-3">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-10 h-10 rounded-lg object-cover border"
            />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <FolderKanban className="text-yellow-400" size={18} />
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{project.title}</h4>
            <p className="text-sm text-gray-500 truncate max-w-xs">{project.description}</p>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (project: Project) => <StatusBadge status={project.status} />
    },
    {
      key: 'dates',
      label: 'Timeline',
      render: (project: Project) => (
        <div>
          <div className="flex items-center gap-1 text-black">
            <Calendar className="w-4 h-4" />
            {project.startDate ? new Date(project.startDate).toLocaleDateString() : '-'}
          </div>
          {project.endDate && (
            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <span>→</span>
              {new Date(project.endDate).toLocaleDateString()}
            </div>
          )}
        </div>
      )
    },
    {
      key: 'displayOrder',
      label: 'Order',
      render: (project: Project) => (
        <div className="flex items-center gap-1">
          <Grid3x3 className="w-4 h-4 text-gray-400" />
          <span className="font-medium">{project.displayOrder}</span>
        </div>
      )
    },
    {
      key: 'tags',
      label: 'Tags & Tech',
      render: (project: Project) => (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-gray-100 text-black rounded text-xs"
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {tag}
            </span>
          ))}
          {project.tags?.length > 3 && (
            <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
          )}
        </div>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      render: (project: Project) => (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setEditProject(project)
              setOpenModal(true)
            }}
            className="p-2 text-yellow-400 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeleteConfirm(project._id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="View Live"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      )
    }
  ]

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
              <FolderKanban className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Projects Management</h1>
              <p className="text-gray-600">Manage and organize your portfolio projects</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setEditProject(null)
            setOpenModal(true)
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{pagination.total ?? 0}</p>
            </div>
            <FolderKanban className="text-yellow-400" size={24} />
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter((p) => p.status === 'active').length}
              </p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Inactive</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter((p) => p.status === 'inactive').length}
              </p>
            </div>
            <X className="text-gray-500" size={24} />
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Draft</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter((p) => p.status === 'draft').length}
              </p>
            </div>
            <Edit className="text-yellow-500" size={24} />
          </div>
        </div>
      </div>

      {/* SEARCH, FILTER & EXPORT BAR */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            placeholder="Search projects by title, description, tags, or features..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <select
              value={statusFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStatusFilter(e.target.value)
              }
              className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <ExportButtons data={filteredProjects} />
        </div>
      </div>

      {/* DATA TABLE */}
      <DataTable
        columns={tableColumns}
        data={paginatedProjects}
        loading={loading}
        sortConfig={sortConfig}
        onSort={handleSort}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        totalItems={filteredProjects.length}
        itemsPerPage={itemsPerPage}
      />

      {/* MODALS */}
      <ProjectModal
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          setEditProject(null)
        }}
        onSubmit={handleCreateOrUpdate}
        loading={loading}
        initialData={editProject}
      />

      <ConfirmModal
        open={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={() => deleteConfirm && handleDelete(deleteConfirm)}
        title="Delete Project"
        message="Are you sure you want to delete this project? This action cannot be undone."
      />

      {/* TOAST NOTIFICATION */}
      <ToastNotification
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  )
}