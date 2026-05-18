// import AdminLayout from './components/AdminLayout'

// export const metadata = {
//   title: 'Admin Panel | Your Website',
//   description: 'Website administration panel',
// }

// export default function Layout({ children }) {
//   return <AdminLayout>{children}</AdminLayout>
// }

// app/admin/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";

import AdminLayout from "./components/AdminLayout";

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  title: "Admin Panel | Your Website",
  description: "Website administration panel"
};

/* =========================
   TYPES
========================= */

interface LayoutProps {
  children: ReactNode;
}

/* =========================
   LAYOUT
========================= */

export default function Layout({
  children
}: LayoutProps) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}