"use client";

import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import Image from "next/image";
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Check,
  X,
  Eye,
  Search,
  Filter,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  cardVariants,
  dropdownVariants,
  rowVariants,
  tableBodyVariants,
  toolbarVariants,
} from "@/constants/animation";
import CredentialItem from "./CredentiallLineItem";
import { data } from "../data";

export default function UserTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.user.name.toLowerCase().includes(query) ||
        item.user.email.toLowerCase().includes(query);
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const filterKey = `${searchQuery}-${statusFilter}`;

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
            placeholder="Search professionals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-gray-900 border-none shadow-sm rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 shadow-sm rounded-2xl text-sm font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Filter
                className={`w-4 h-4 ${statusFilter !== "All" ? "text-blue-500" : "text-gray-400"}`}
              />
              {statusFilter === "All" ? "Filter By Status" : statusFilter}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800 z-50 p-1 origin-top-right"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {["All", "Verified", "For Review", "Rejected"].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setStatusFilter(s);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence mode="popLayout">
            {(searchQuery || statusFilter !== "All") && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("All");
                }}
                className="p-2.5 bg-white dark:bg-gray-900 shadow-sm rounded-2xl text-gray-400 hover:text-rose-500 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
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
                    User
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Licenses
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
                key={filterKey}
                className="divide-y divide-gray-100 dark:divide-white/[0.05]"
                variants={tableBodyVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredData.map((user) => (
                  <motion.tr key={user.id} variants={rowVariants}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src={user.user.image}
                            alt={user.user.name}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            <p>{user.user.name}</p>
                          </div>
                          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                            {user.user.specialization.join(", ")}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.user.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="w-[180px] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg p-1.5 shadow-inner">
                        {user.user.prcNumber && (
                          <CredentialItem
                            label="PRC Number"
                            value={user.user.prcNumber}
                          />
                        )}
                        {user.user.prcNumber && user.user.licenseNumber && (
                          <div className="h-px bg-gray-100 dark:bg-white/10 my-1 mx-2" />
                        )}
                        {user.user.licenseNumber && (
                          <CredentialItem
                            label="License No."
                            value={user.user.licenseNumber}
                          />
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {new Date(user.user.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </TableCell>
                    {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {user.staff.images.map((staffImage, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={staffImage}
                            alt={`Team member ${index + 1}`}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell> */}
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={
                          user.status === "Verified"
                            ? "success"
                            : user.status === "For Review"
                              ? "warning"
                              : "error"
                        }
                      >
                        {user.status === "Verified" ? (
                          <ShieldCheck className="w-4 h-4" />
                        ) : user.status === "For Review" ? (
                          <ShieldAlert className="w-4 h-4" />
                        ) : (
                          <ShieldX className="w-4 h-4" />
                        )}
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      <div className="flex flex-col  justify-center items-left gap-2">
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          <Eye size={14} /> View
                        </button>
                        {user.status === "For Review" && (
                          <>
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                              <Check size={14} /> Approve
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                              <X size={14} /> Reject
                            </button>
                          </>
                        )}
                        {user.status === "Rejected" && (
                          <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                            <Check size={14} /> Allow Appeal
                          </button>
                        )}
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
