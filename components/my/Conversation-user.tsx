import Image from "next/image";
import React from "react";

const ConversationUser = () => {
  return (
    <div className="py-1 px-3 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer transition-all duration-200">
      <div className="flex items-center gap-x-3 md:gap-x-4">
        <Image
          alt="user"
          src={"/zd.jpg"}
          width={50}
          height={50}
          loading="lazy"
          className="rounded-full w-[50px] h-[50px] object-center"
        />
        <div>
          <h5 className="font-bold line-clamp-1 break-all">Greg James</h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-1 break-all">Ok, see you later</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <h5 className="font-medium text-gray-500 text-sm md:text-base">
          19:48
        </h5>
        <div className="w-[20px] h-[20px] flex justify-center items-center text-white rounded-full bg-green-500 text-sm">
          2
        </div>
      </div>
    </div>
  );
};

export default ConversationUser;
