"use client";
import {
  Users,
  CheckCircle,
  CreditCard,
  FileBarChart,
  XCircle,
  MoreHorizontal,
  Clock,
} from "lucide-react";
import DashboardCard from "./DashboardCard";
import StatWidget from "./StatWidget";
import { useState } from "react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [reviewUsers] = useState([
    {
      id: 1,
      name: "Dr. Maria Santos",
      role: "General Practitioner",
      date: "10m ago",
      image: "MS",
    },
    {
      id: 2,
      name: "Clinic Admin - Quezon",
      role: "Hospital Admin",
      date: "1h ago",
      image: "CA",
    },
    {
      id: 3,
      name: "Dr. Juan Dela Cruz",
      role: "Specialist",
      date: "3h ago",
      image: "JD",
    },
  ]);

  const reports = [
    {
      id: 101,
      type: "Data Error",
      clinic: "Metro Care",
      priority: "High",
      time: "5m ago",
    },
    {
      id: 102,
      type: "Billing Issue",
      clinic: "Family Health",
      priority: "Medium",
      time: "45m ago",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100">
      <div className="max-w-[1600px] mx-auto p-4 space-y-8">
        {/* Top Metrics Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatWidget
            icon={Users}
            label="Total Users"
            value="4,829"
            trend={8.2}
            isPositive={true}
            color="bg-blue-100"
            delay={0.1}
          />
          <StatWidget
            icon={CheckCircle}
            label="Subscriptions"
            value="1,104"
            trend={12.5}
            isPositive={true}
            color="bg-purple-100"
            delay={0.2}
          />
          <StatWidget
            icon={CreditCard}
            label="Total Revenue"
            value="₱284.5k"
            trend={5.1}
            isPositive={true}
            color="bg-emerald-100"
            delay={0.3}
          />

          <StatWidget
            icon={FileBarChart}
            label="Active Reports"
            value="12"
            trend={2}
            isPositive={false}
            color="bg-rose-100"
            delay={0.4}
          />
        </section>

        {/* Main Dashboard Layout */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Users for Review List */}
          <DashboardCard
            title="Verification Queue"
            className="xl:col-span-2"
            action={
              <button className="text-xs font-bold text-blue-600">
                View All Queue
              </button>
            }
            delay={0.5}
          >
            <div className="space-y-4">
              {reviewUsers.map((user) => (
                <div
                  key={user.id}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-black">
                      {user.image}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                        {user.name}
                      </h4>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        Submitted
                      </span>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {user.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl hover:bg-emerald-100 transition-colors">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-2 text-rose-600 bg-rose-50 dark:bg-rose-500/10 rounded-xl hover:bg-rose-100 transition-colors">
                        <XCircle size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05] rounded-xl transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Reports Sidebar */}
          <div className="space-y-6">
            <DashboardCard title="Urgent Reports" delay={0.6}>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className="relative p-4 rounded-2xl bg-rose-50/30 dark:bg-rose-500/5 border border-rose-100/50 dark:border-rose-500/10"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-500/20 text-rose-600 text-[10px] font-black uppercase tracking-widest">
                        {report.priority} PRIORITY
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                        <Clock size={10} /> {report.time}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {report.type}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Source: {report.clinic}
                    </p>
                    <button className="mt-4 w-full py-2 bg-white dark:bg-gray-800 text-[11px] font-bold rounded-lg border border-rose-100 dark:border-rose-500/20 hover:bg-rose-50 transition-colors">
                      Investigate Report
                    </button>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        </section>

        {/* Global Growth (Conceptual Mini Chart) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/[0.05] rounded-[2rem] p-8 shadow-sm group hover:border-blue-500/20 transition-all"
        >
          {" "}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-black tracking-tight">
                User Acquisition
              </h3>
              <p className="text-sm text-gray-400">
                Monthly breakdown of registered vs. subscribed users.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-50 dark:bg-white/[0.05] rounded-xl text-xs font-bold text-gray-500">
                2024
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold">
                2025
              </button>
            </div>
          </div>
          <div className="h-48 flex items-end justify-between gap-1">
            {[20, 35, 25, 45, 60, 55, 80, 75, 90, 85, 95, 100].map((val, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-full flex items-end justify-center gap-1 h-32">
                  <div
                    style={{ height: `${val * 0.7}%` }}
                    className="w-full max-w-[12px] bg-blue-200 dark:bg-blue-900/30 rounded-t-sm group-hover:bg-blue-300 transition-all"
                  ></div>
                  <div
                    style={{ height: `${val}%` }}
                    className="w-full max-w-[12px] bg-blue-600 rounded-t-sm group-hover:bg-blue-500 transition-all"
                  ></div>
                </div>
                <span className="text-[9px] font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                  M{i + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AdminDashboard;
