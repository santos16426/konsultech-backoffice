import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CredentialItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const el = document.createElement("textarea");
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={handleCopy}
      className="group flex items-center justify-between gap-3 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10"
    >
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          {label}
        </span>
        <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">
          {value}
        </span>
      </div>
      <div
        className={`p-1 rounded transition-colors ${copied ? "bg-green-100 dark:bg-green-500/20" : "opacity-0 group-hover:opacity-100 bg-gray-200 dark:bg-gray-700"}`}
      >
        {copied ? (
          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
        ) : (
          <Copy className="w-3 h-3 text-gray-500 dark:text-gray-400" />
        )}
      </div>
    </div>
  );
}
