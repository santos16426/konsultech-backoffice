import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LaboratoriesTable from "@/features/labs/components/LaboratoriesTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Tests | KonsulTech Admin",
  description: "",
  // other metadata
};

export default function Laboratories() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lab Tests" />
      <div className="space-y-6">
        <LaboratoriesTable />
      </div>
    </div>
  );
}
