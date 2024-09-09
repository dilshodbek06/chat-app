import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SidebarHeader = () => {
  return (
    <div className="flex items-center py-2 px-4 gap-x-3 md:gap-x-4">
      <Menu className="w-6 h-6 cursor-pointer" />
      <div className="w-full relative">
        <Input
          placeholder="Search..."
          className="rounded-2xl border-0 bg-gray-100      placeholder-slate-200 dark:bg-slate-700"
        />
        <Search className="w-5 h-5 absolute top-2 right-3 text-gray-500"/>
      </div>
    </div>
  );
};

export default SidebarHeader;
