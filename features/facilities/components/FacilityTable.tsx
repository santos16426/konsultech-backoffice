"use client";
import { Table, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import {
  Building2,
  Eye,
  Hospital,
  HouseHeart,
  MapPin,
  Pencil,
  Search,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  cardVariants,
  rowVariants,
  tableBodyVariants,
  toolbarVariants,
} from "@/constants/animation";

export default function FacilityTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    const data = [
      {
        id: 1,
        entity: {
          name: "St. Luke's Medical Center",
          address: "279 E Rodriguez Sr. Ave, Quezon City, 1112 Metro Manila",
          type: "Hospital",
          createdAt: "2026-01-01",
        },
      },
      {
        id: 2,
        entity: {
          name: "City Health Diagnostic Clinic",
          address: "123 Business Park, Tower 1, Makati City",
          type: "Diagnostic Center",
          createdAt: "2026-01-15",
        },
      },
      {
        id: 3,
        entity: {
          name: "Metro Wellness Hospital",
          address: "45 Industrial Way, Pasig City, Philippines",
          type: "Hospital",
          createdAt: "2026-02-10",
        },
      },
      {
        id: 4,
        entity: {
          name: "Green Valley Community Clinic",
          address: "Suburban Plaza, Block 4, Taguig City",
          type: "Clinic",
          createdAt: "2026-03-01",
        },
      },
      {
        id: 5,
        entity: {
          name: "The Heart Institute",
          address: "Medical City Complex, Ortigas, Pasig",
          type: "Clinic",
          createdAt: "2026-03-20",
        },
      },
    ];

    return data.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.entity.name.toLowerCase().includes(query) ||
        item.entity.address.toLowerCase().includes(query);
      return matchesSearch;
    });
  }, [searchQuery]);

  const filterKey = searchQuery;

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
            placeholder="Search by name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-gray-900 border-none shadow-sm rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
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
                    Facility
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Address
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Created At
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
                key={filterKey}
                className="divide-y divide-gray-100 dark:divide-white/[0.05]"
                variants={tableBodyVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredData.map((item) => (
                  <motion.tr
                    key={item.id}
                    className="group hover:bg-blue-50/30 dark:hover:bg-blue-500/[0.02] transition-colors"
                    variants={rowVariants}
                  >
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-inner">
                          {item.entity.type === "Hospital" ? (
                            <Hospital size={24} />
                          ) : item.entity.type === "Clinic" ? (
                            <Building2 size={24} />
                          ) : (
                            <HouseHeart size={24} />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-base leading-tight">
                            {item.entity.name}
                          </div>
                          <span className="text-[10px] font-bold text-blue-500 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded-md mt-1 inline-block uppercase tracking-wider">
                            {item.entity.type}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="px-6 py-5">
                      <div className="flex items-start gap-2 max-w-[280px]">
                        <MapPin
                          size={14}
                          className="text-gray-400 mt-1 shrink-0"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                          {item.entity.address}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="px-6 py-5 text-gray-500 text-sm dark:text-gray-400">
                      {new Date(item.entity.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </TableCell>

                    <TableCell className="px-6 py-5 text-start">
                      <div className="flex items-center justify-start gap-2">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                          title="View Details"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                          title="Delete"
                        >
                          <X size={18} />
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
