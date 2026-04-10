import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PricingTable from "@/features/pricing/components/PricingTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | KonsulTech Admin",
  description: "",
};

export default function Pricing() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Pricing" />
      <div className="space-y-6">
        <PricingTable />
      </div>
    </div>
  );
}
