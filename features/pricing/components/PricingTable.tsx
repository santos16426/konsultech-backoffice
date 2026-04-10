"use client";
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import {
  cardVariants,
  rowVariants,
  tableBodyVariants,
  toolbarVariants,
} from "@/constants/animation";
import { Edit2, Eye, Search, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PricingTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [plans] = useState([
    {
      id: 1,
      title: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "100 Records",
        "Basic Features",
        "100 Patients",
        "100 Consultations",
      ],
      status: "Active",
      isPopular: false,
    },
    {
      id: 2,
      title: "Professional Plan",
      monthlyPrice: 1199,
      annualPrice: 10000,
      features: [
        "Unlimited Patients",
        "Unlimited Records",
        "Analytics",
        "Priority Support",
      ],
      status: "Active",
      isPopular: true,
    },
    {
      id: 3,
      title: "Enterprise Plan",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: ["Multi-location", "SLA", "Dedicated Manager"],
      status: "Draft",
      isPopular: false,
    },
  ]);

  const filteredPlans = plans.filter((plan) =>
    plan.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      <motion.div
        className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between"
        variants={toolbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search pricing plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-gray-900 border-none shadow-sm rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </motion.div>
      <motion.div
        className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Title
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Pricing
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Features
                  </TableCell>

                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>
              <motion.tbody
                key={searchQuery}
                className="divide-y divide-gray-100 dark:divide-white/[0.05]"
                variants={tableBodyVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredPlans.map((plan) => (
                  <motion.tr key={plan.id} variants={rowVariants}>
                    {/* Title & Badge */}
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="flex items-center gap-2">
                        {plan.title}
                        {plan.isPopular && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-tight">
                            Popular
                          </span>
                        )}
                      </div>
                    </TableCell>

                    {/* Pricing in Peso */}
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="flex flex-col">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          {typeof plan.monthlyPrice === "number"
                            ? `₱${plan.monthlyPrice.toLocaleString()}`
                            : plan.monthlyPrice}
                          <span className="text-gray-400 font-normal text-xs ml-1">
                            /mo
                          </span>
                        </span>
                        <span className="text-gray-400 text-[11px]">
                          {typeof plan.annualPrice === "number"
                            ? `₱${plan.annualPrice.toLocaleString()}/yr`
                            : "Contact for Annual"}
                        </span>
                      </div>
                    </TableCell>

                    {/* Features Chips */}
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="flex flex-wrap items-center gap-1.5 max-w-[300px]">
                        {plan.features.slice(0, 3).map((f, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.05] text-[10px] font-medium text-gray-600 dark:text-gray-400"
                          >
                            {f}
                          </span>
                        ))}
                        {plan.features.length > 3 && (
                          <span className="text-[10px] text-gray-400 font-medium">
                            +{plan.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </TableCell>

                    {/* Status Toggle */}
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={
                          plan.status === "Active"
                            ? "success"
                            : plan.status === "Draft"
                              ? "warning"
                              : "error"
                        }
                      >
                        {plan.status}
                      </Badge>
                    </TableCell>

                    {/* Management Actions */}
                    <TableCell className="text-start">
                      <div className="flex items-center justify-start gap-1">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all"
                          title="View Preview"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all"
                          title="Edit Plan"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all"
                          title="Delete Plan"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </motion.tbody>
            </Table>
          </div>
        </div>
      </motion.div>
    </>
  );
}
