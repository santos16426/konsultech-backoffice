import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AdminDashboard from "@/features/dashboard/components/AdminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | KonsulTech Admin",
  description: "",
};

export default function AdminDashboardPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Dashboard" />
      <div className="space-y-6">
        <AdminDashboard />
      </div>
    </div>
  );
}
