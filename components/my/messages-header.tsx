import { EllipsisVertical, Phone, Search } from "lucide-react";
import Image from "next/image";

const MessagesHeader = () => {
  return (
    <div className="py-1 px-3 flex justify-between items-center  dark:bg-slate-600 shadow-sm transition-all duration-200 rounded-e">
      <div className="flex items-center gap-x-3 md:gap-x-4">
        <Image
          alt="user"
          src={"/zd.jpg"}
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full w-[40px] h-[40px] object-center"
          quality={90}
        />
        <div>
          <h5 className="font-bold line-clamp-1 break-all">Greg James</h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-1 break-all">
            last seen 5 mins ago
          </p>
        </div>
      </div>

      <div className="flex gap-x-2 md:gap-x-6">
        <Search className="w-5 h-5 cursor-pointer" />
        <Phone className="w-5 h-5 cursor-pointer" />
        <EllipsisVertical className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagesHeader;
