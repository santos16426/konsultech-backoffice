import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import FacilityTable from "@/features/facilities/components/FacilityTable";
// import BasicTableOne from "@/components/tables/Table";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Facilities | KonsulTech Admin",
  description: "",
  // other metadata
};

export default function Facilities() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Facilities" />
      <div className="space-y-6">
        <FacilityTable />
      </div>
    </div>
  );
}
