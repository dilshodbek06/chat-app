import ConversationUser from "./Conversation-user";

const UsersList = () => {
  return (
    <div className="py-4 h-[89%] flex flex-col gap-3 overflow-y-auto users-scrollbar">
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
      <ConversationUser />
    </div>
  );
};

export default UsersList;
