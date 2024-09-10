import bgImage from "../../public/pattern1.svg";

const SelectConversationHint = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="h-[31.3rem] bg-contain bg-[#8BABD8] dark:bg-slate-800 px-2 md:px-4 py-2 flex justify-center items-center relative rounded-r-md"
    >
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      <div className="z-10 px-3 py-1 rounded-full text-sm bg-gray-200 font-medium dark:bg-slate-600">
        select a chat to start messaging
      </div>
    </div>
  );
};

export default SelectConversationHint;
