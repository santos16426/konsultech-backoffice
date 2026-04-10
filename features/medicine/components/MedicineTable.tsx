"use client";

import { medicineData } from "@/features/medicine/data/index";
import {
  MedicineGroupedRecord,
  MedicineRecord,
} from "@/features/medicine/types/index";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Edit2,
  Filter,
  Maximize2,
  Minimize2,
  MoreVertical,
  Search,
  Trash2,
} from "lucide-react";
import {
  fadeInVariants,
  paginationBarVariants,
  stackItemVariants,
  tableBodyVariants,
  toolbarVariants,
} from "@/constants/animation";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function MedicineTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<MedicineGroupedRecord>(
    {},
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredAndGroupedData = useMemo<
    Record<string, MedicineRecord[]>
  >(() => {
    const query = searchQuery.toLowerCase().trim();
    const filteredData =
      query === ""
        ? medicineData
        : medicineData.filter(
            (item) =>
              item.genericName.toLowerCase().includes(query) ||
              item.brandName.toLowerCase().includes(query),
          );

    return filteredData.reduce<Record<string, MedicineRecord[]>>(
      (acc, item) => {
        if (!acc[item.genericName]) acc[item.genericName] = [];
        acc[item.genericName].push(item);
        return acc;
      },
      {},
    );
  }, [searchQuery]);

  const groupKeys = Object.keys(filteredAndGroupedData);
  const totalPages = Math.ceil(groupKeys.length / itemsPerPage);
  const currentGroups = groupKeys.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  function toggleGroup(groupName: string) {
    setExpandedGroups((prevState) => ({
      ...prevState,
      [groupName]: !prevState[groupName],
    }));
  }

  function expandAll() {
    const expandedState = currentGroups.reduce<MedicineGroupedRecord>(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {},
    );
    setExpandedGroups(expandedState);
  }

  function collapseAll() {
    setExpandedGroups({});
  }

  const listAnimKey = `${searchQuery}-${currentPage}`;

  return (
    <>
      <motion.div
        className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between"
        variants={toolbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full md:max-w-md">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500" />
          <input
            type="text"
            placeholder="Search generic or brand name..."
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-2xl border border-gray-200 bg-white py-3 pr-4 pl-12 text-sm outline-none transition-all focus:ring-4 focus:ring-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={expandAll}
            title="Expand all"
            className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-gray-500 transition-colors hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900"
          >
            <Maximize2 size={18} />
          </button>
          <button
            onClick={collapseAll}
            title="Collapse all"
            className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-gray-500 transition-colors hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900"
          >
            <Minimize2 size={18} />
          </button>
          <button
            title="Filter"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-500 transition-colors hover:text-blue-500 dark:border-gray-800 dark:bg-gray-900"
          >
            <Filter size={18} />
          </button>
        </div>
      </motion.div>

      <div className="space-y-3">
        {currentGroups.length === 0 ? (
          <motion.div
            className="rounded-3xl  border border-dashed border-gray-200 bg-white py-20 text-center dark:border-gray-800 dark:bg-gray-900"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm text-gray-400">No medicines found.</p>
          </motion.div>
        ) : (
          <motion.div
            key={listAnimKey}
            className="contents space-y-3"
            variants={tableBodyVariants}
            initial="hidden"
            animate="visible"
          >
            {currentGroups.map((genericName) => {
              const isExpanded =
                searchQuery.trim() !== ""
                  ? true
                  : Boolean(expandedGroups[genericName]);

              return (
                <motion.div
                  key={genericName}
                  variants={stackItemVariants}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900/50"
                >
                  <div
                    onClick={() => toggleGroup(genericName)}
                    className={`flex cursor-pointer items-center justify-between px-4 py-3.5 transition-colors ${
                      isExpanded ? "bg-blue-50/30 dark:bg-blue-500/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`transition-transform duration-200 ${
                          isExpanded
                            ? "rotate-90 text-blue-500"
                            : "text-gray-300"
                        }`}
                      >
                        <ChevronRight size={16} />
                      </div>
                      <div>
                        <h3 className="text-md text-gray-900 dark:text-white">
                          {genericName}
                        </h3>
                        <p className="text-xs text-blue-500/70">
                          {filteredAndGroupedData[genericName].length} Brand
                          Variants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="rounded-lg p-1.5 text-gray-400 hover:text-blue-600">
                        <Edit2 size={14} />
                      </button>
                      <button className="rounded-lg p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden border-t border-gray-50 dark:border-gray-800/50">
                      <div className="bg-gray-50/30 dark:bg-black/10">
                        {filteredAndGroupedData[genericName].map((item) => (
                          <div
                            key={item.id}
                            className="group/item flex items-center justify-between border-b border-gray-100 py-2.5 pr-4 pl-11 last:border-0 dark:border-gray-800/30"
                          >
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                              {item.brandName}
                            </span>
                            <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover/item:opacity-100">
                              <button className="p-1.5 text-gray-400 hover:text-blue-500">
                                <Edit2 size={13} />
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-rose-500">
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {totalPages > 1 && (
          <motion.div
            key="medicine-pagination"
            className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:flex-row dark:border-gray-800 dark:bg-gray-900"
            variants={paginationBarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="text-xs font-medium text-gray-500">
              Showing{" "}
              <span className="text-gray-900 dark:text-white">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="text-gray-900 dark:text-white">
                {Math.min(currentPage * itemsPerPage, groupKeys.length)}
              </span>{" "}
              of{" "}
              <span className="text-gray-900 dark:text-white">
                {groupKeys.length}
              </span>{" "}
              groups
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-white/5"
              >
                <ChevronsLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(1, prevPage - 1))
                }
                disabled={currentPage === 1}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-white/5"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2 px-4">
                <span className="text-xs font-bold">Page</span>
                <input
                  type="number"
                  value={currentPage}
                  onChange={(event) => {
                    const parsedValue = Number.parseInt(event.target.value, 10);
                    if (parsedValue > 0 && parsedValue <= totalPages)
                      setCurrentPage(parsedValue);
                  }}
                  className="w-12 rounded border border-gray-100 bg-gray-50 py-1 text-center text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800"
                />
                <span className="text-xs font-medium text-gray-400">
                  of {totalPages}
                </span>
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(totalPages, prevPage + 1),
                  )
                }
                disabled={currentPage === totalPages}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-white/5"
              >
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-white/5"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
