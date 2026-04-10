import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MedicineTable from "@/features/medicine/components/MedicineTable";
// import BasicTableOne from "@/components/tables/Table";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Medicine | KonsulTech Admin",
  description: "",
  // other metadata
};

export default function Medicine() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Medicine" />
      <div className="space-y-6">
        <MedicineTable />
      </div>
    </div>
  );
}
