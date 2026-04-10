import type { Metadata } from "next";

import { AdminLayoutShell } from "@/layout/AdminLayoutShell";

export const metadata: Metadata = {
  title: "Admin - KonsulTech",
  description: "Admin dashboard for KonsulTech",
  icons: {
    icon: "/images/logo/logo.svg",
    shortcut: "/images/logo/logo.svg",
    apple: "/images/logo/logo.svg",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
