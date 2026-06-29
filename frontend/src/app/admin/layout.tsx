

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