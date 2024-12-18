import MessagesContainer from "./my/Messages-container";
import SidebarHeader from "./my/sidebar-header";
import UsersList from "./my/Users-list";

const Chat = () => {
  return (
    <div className="container max-w-7xl shadow-md bg-white dark:bg-slate-800 min-h-[500px] max-h-[30rem] rounded-md flex">
      {/* sidebar chats */}
      <div className="border-r border-gray-600 w-[30%] hidden md:block">
        {/* chat sidebar header */}
        <SidebarHeader />
        {/* users list  */}
        <UsersList />
      </div>
      {/* chat messages */}
      <div className="w-full md:w-[70%]">
        <MessagesContainer />
        {/* <div> */}
        {/* chat messages header */}
        {/* <MessagesHeader /> */}
        {/* chat messages container  */}
        {/* <Messages /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Chat;
