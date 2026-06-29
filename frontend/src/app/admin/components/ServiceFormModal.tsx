
/* =========================
   FILE: app/admin/services/components/ServiceFormModal.tsx
========================= */

import { useState, useEffect } from "react"

const GRADIENT_PRESETS: string[] = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
]

interface Service {
  _id?: string
  title?: string
  description?: string
  fullDescription?: string
  icon?: string
  gradient?: string
  features?: string[]
}

interface FormState {
  title: string
  description: string
  fullDescription: string
  icon: string
  gradient: string
  features: string[]
}

interface FormErrors {
  title?: string
  description?: string
  icon?: string
}

interface ServiceFormModalProps {
  isOpen: boolean
  onClose: () => void
  service: Service | null
  onSubmit: (form: FormState) => void
  loading: boolean
}

export default function ServiceFormModal({
  isOpen,
  onClose,
  service,
  onSubmit,
  loading,
}: ServiceFormModalProps) {
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    fullDescription: "",
    icon: "",
    gradient: "",
    features: [],
  })

  const [featureInput, setFeatureInput] = useState<string>("")
  const [errors, setErrors]             = useState<FormErrors>({})

  useEffect(() => {
    if (service) {
      setForm({
        title:           service.title           ?? "",
        description:     service.description     ?? "",
        fullDescription: service.fullDescription ?? "",
        icon:            service.icon            ?? "",
        gradient:        service.gradient        ?? "",
        features:        service.features        ?? [],
      })
    } else {
      resetForm()
    }
  }, [service])

  const resetForm = (): void => {
    setForm({
      title: "",
      description: "",
      fullDescription: "",
      icon: "",
      gradient: "",
      features: [],
    })
    setFeatureInput("")
    setErrors({})
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.title.trim())       newErrors.title       = "Title is required"
    if (!form.description.trim()) newErrors.description = "Description is required"
    if (!form.icon.trim())        newErrors.icon        = "Icon is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!validateForm()) return
    onSubmit(form)
  }

  const handleAddFeature = (): void => {
    const trimmed = featureInput.trim()
    if (trimmed && !form.features.includes(trimmed)) {
      setForm({ ...form, features: [...form.features, trimmed] })
      setFeatureInput("")
    }
  }

  const handleRemoveFeature = (index: number): void => {
    setForm({
      ...form,
      features: form.features.filter((_, i) => i !== index),
    })
  }

  const handleFeatureKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddFeature()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              {service ? "Edit Service" : "Add New Service"}
            </h2>
            <button
              onClick={onClose}
              disabled={loading}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title + Icon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, title: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., Web Development"
                disabled={loading}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icon *
              </label>
              <input
                type="text"
                value={form.icon}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, icon: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.icon ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 💻 or laptop-icon"
                disabled={loading}
              />
              {errors.icon && (
                <p className="mt-1 text-sm text-red-600">{errors.icon}</p>
              )}
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description *
            </label>
            <input
              type="text"
              value={form.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, description: e.target.value })
              }
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Brief description of the service"
              disabled={loading}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Description
            </label>
            <textarea
              rows={4}
              value={form.fullDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setForm({ ...form, fullDescription: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
              placeholder="Detailed description of the service..."
              disabled={loading}
            />
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={featureInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFeatureInput(e.target.value)
                }
                onKeyPress={handleFeatureKeyPress}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Add a feature"
                disabled={loading}
              />
              <button
                type="button"
                onClick={handleAddFeature}
                disabled={loading || !featureInput.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg"
                >
                  <span>{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    disabled={loading}
                    className="text-blue-500 hover:text-blue-700 ml-1 disabled:opacity-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gradient Background
            </label>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-3">
              {GRADIENT_PRESETS.map((gradient, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setForm({ ...form, gradient })}
                  disabled={loading}
                  aria-label={`Select gradient ${idx + 1}`}
                  className={`h-10 rounded-lg border-2 transition-all ${
                    form.gradient === gradient
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  style={{ background: gradient }}
                />
              ))}
            </div>
            <input
              type="text"
              value={form.gradient}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, gradient: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Or enter custom gradient CSS"
              disabled={loading}
            />
            <p className="mt-1 text-xs text-gray-500">
              Example: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading && (
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {service ? "Update Service" : "Create Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}