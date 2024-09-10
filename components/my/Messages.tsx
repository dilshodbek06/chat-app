"use client";

import Image from "next/image";
import bgImage from "../../public/pattern1.svg";
import { SendHorizontal, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

const Messages = () => {
  const newMessageRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = async () => {
    if (!newMessageRef.current) return;
    try {
      const newMessage = newMessageRef.current.value;
      console.log(newMessage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="h-[28rem] bg-contain overflow-y-auto bg-[#8BABD8] dark:bg-slate-800 px-2 md:px-4 py-2 relative"
    >
      {/* <div className="absolute inset-0 backdrop-blur-[1px]"></div> */}
      <div className="overflow-y-auto scrollbar-thin max-h-[89%]">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black       dark:text-gray-200 dark:bg-slate-700">
            You were the Chosen One!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="user" src={"/zd.jpg"} width={80} height={80} />
            </div>
          </div>
          <div className="chat-header">John</div>
          <div className="chat-bubble bg-white text-black     dark:text-gray-200 dark:bg-slate-700 max-w-[19rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
            odio!
          </div>
          <time className="chat-footer text-white dark:text-gray-400">
            12:45
          </time>
        </div>
      </div>
      <footer className="relative flex px-1 md:px-8">
        <Smile className="w-5 h-5 cursor-pointer absolute left-5 md:left-11 top-3 text-gray-700 dark:text-gray-300" />
        <Input
          ref={newMessageRef}
          placeholder="Message"
          className="rounded-md pl-11 pr-11 py-5 bg-white dark:bg-slate-700 shadow-md dark:border-slate-700"
        />
        <SendHorizontal
          onClick={handleSendMessage}
          className="w-5 h-5 cursor-pointer absolute right-5 md:right-12 top-3 fill-sky-500 text-sky-500 dark:fill-none dark:text-gray-200"
        />
      </footer>
    </div>
  );
};

export default Messages;
