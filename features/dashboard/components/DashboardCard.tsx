import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  children,
  className = "",
  action = null,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
      }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/[0.05] rounded-[2rem] p-6 shadow-sm group relative overflow-hidden transition-colors hover:border-blue-500/20 ${className}`}
    >
      {/* Subtle Glow Background Effect on Hover */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="font-bold text-gray-900 dark:text-white text-sm tracking-tight uppercase opacity-60 group-hover:opacity-100 group-hover:text-blue-600 transition-all">
          {title}
        </h3>
        {action}
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
