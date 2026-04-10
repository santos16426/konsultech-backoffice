import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UserTable from "@/features/users/components/UserTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | KonsulTech Admin",
  description: "",
};

export default function Users() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <UserTable />
      </div>
    </div>
  );
}
