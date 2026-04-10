"use client";
import { Table, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import {
  fadeInVariants,
  rowVariants,
  stackItemVariants,
  tableBodyVariants,
  toolbarVariants,
} from "@/constants/animation";
import { data } from "@/features/labs/data";
import { LabTestType } from "@/features/labs/types";
import {
  ChevronDown,
  Edit2,
  FlaskConical,
  FolderOpen,
  Info,
  RotateCcw,
  Search,
  Star,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
export default function LaboratoriesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {},
  );

  const groupedData = useMemo(() => {
    const filtered = data.filter((item: LabTestType) => {
      const query = searchQuery.toLowerCase();
      return (
        item.testName.toLowerCase().includes(query) ||
        item.groupName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    });

    return filtered.reduce(
      (acc: Record<string, LabTestType[]>, item: LabTestType) => {
        if (!acc[item.groupName]) acc[item.groupName] = [];
        acc[item.groupName].push(item);
        return acc;
      },
      {},
    );
  }, [searchQuery]);

  const groupKeys = Object.keys(groupedData);

  // Automatically expand groups that have search results
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const newExpanded: Record<string, boolean> = {};
      groupKeys.forEach((key) => {
        newExpanded[key] = true;
      });
      setTimeout(() => {
        setExpandedGroups(newExpanded);
      }, 0);
    }
  }, [searchQuery, groupKeys]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev: Record<string, boolean>) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };
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
            placeholder="Search lab tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-gray-900 border-none shadow-sm rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <AnimatePresence mode="popLayout">
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSearchQuery("")}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 shadow-sm rounded-2xl text-sm text-gray-500 hover:text-rose-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Search
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="space-y-3">
        {groupKeys.length === 0 ? (
          <motion.div
            className="text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <FlaskConical className="mx-auto text-gray-300 mb-2" />
            <p className="text-gray-500 text-sm">
              No tests found matching your search
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={searchQuery}
            variants={tableBodyVariants}
            initial="hidden"
            animate="visible"
            className="contents space-y-3"
          >
            {groupKeys.map((groupName) => (
              <motion.div
                key={groupName}
                variants={stackItemVariants}
                className="overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/[0.05] rounded-[1.5rem] shadow-sm transition-all"
              >
                {/* Group Trigger */}
                <button
                  onClick={() => toggleGroup(groupName)}
                  className={`w-full flex items-center justify-between px-6 py-4 transition-all duration-300 ${
                    expandedGroups[groupName]
                      ? "bg-blue-50/50 dark:bg-blue-900/10"
                      : "hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                        expandedGroups[groupName]
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      <FolderOpen size={16} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm capitalize tracking-wider">
                        {groupName}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-semibold capitalize">
                        {groupedData[groupName].length} Available Tests
                      </p>
                    </div>
                  </div>
                  <div
                    className={`transition-transform duration-500 ease-in-out ${expandedGroups[groupName] ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="text-gray-400" size={20} />
                  </div>
                </button>

                {/* Smooth Expandable Content using Grid Trick */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    expandedGroups[groupName]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-1 border-t border-gray-50 dark:border-white/[0.05]">
                      <Table>
                        <TableHeader className="bg-gray-50/30 dark:bg-white/[0.01]">
                          <TableRow>
                            <TableCell
                              isHeader
                              className="px-6 py-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest text-left"
                            >
                              Test Name
                            </TableCell>
                            <TableCell
                              isHeader
                              className="px-6 py-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest text-left"
                            >
                              Description
                            </TableCell>
                            <TableCell
                              isHeader
                              className="px-6 py-3 font-bold text-[10px] text-gray-400 uppercase tracking-widest text-right"
                            >
                              Actions
                            </TableCell>
                          </TableRow>
                        </TableHeader>
                        <motion.tbody
                          className="divide-y divide-gray-50 dark:divide-white/[0.05]"
                          variants={tableBodyVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {groupedData[groupName].map((test) => (
                            <motion.tr
                              key={test.id}
                              className="group hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
                              variants={rowVariants}
                            >
                              <TableCell className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                    {test.testName}
                                  </div>
                                  {test.commonlyUsed && (
                                    <Star
                                      className="text-yellow-500 fill-yellow-500"
                                      size={16}
                                    />
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="px-6 py-4">
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic max-w-md">
                                  {test.description}
                                </p>
                              </TableCell>
                              <TableCell className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <button className="p-2 text-gray-300 hover:text-blue-500 transition-colors">
                                    <Info size={16} />
                                  </button>
                                  <button className="p-2 text-gray-300 hover:text-emerald-500 transition-colors">
                                    <Edit2 size={16} />
                                  </button>
                                  <button className="p-2 text-gray-300 hover:text-rose-500 transition-colors">
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
