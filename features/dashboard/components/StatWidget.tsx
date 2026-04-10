import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";
import { RefAttributes } from "react";
import { motion } from "framer-motion";

export default function StatWidget({
  icon: Icon,
  label,
  value,
  trend,
  isPositive,
  color,
  delay = 0,
}: {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: string | number;
  trend?: number;
  isPositive?: boolean;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      transition={{ duration: 0.4, delay }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/[0.05] rounded-[2rem] p-5 flex flex-col justify-between shadow-sm group cursor-pointer hover:border-blue-500/30"
    >
      <div className="flex items-start justify-between">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className={`p-3 rounded-2xl ${color} bg-opacity-10 dark:bg-opacity-20 group-hover:bg-opacity-20 transition-all`}
        >
          <Icon className={color.replace("bg-", "text-")} size={20} />
        </motion.div>
        {trend && (
          <div
            className={`flex items-center gap-0.5 text-xs font-bold ${isPositive ? "text-green-500" : "text-rose-500"}`}
          >
            {isPositive ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            {trend}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-gray-600 dark:group-hover:text-blue-400 transition-colors">
          {label}
        </p>
        <p className="text-2xl font-black text-gray-900 dark:text-white mt-1 group-hover:scale-110 origin-left transition-transform duration-300">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
