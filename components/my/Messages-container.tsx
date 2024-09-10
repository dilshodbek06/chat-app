"use client";

import { useState } from "react";
import Messages from "./Messages";
import MessagesHeader from "./messages-header";
import SelectConversationHint from "./select-conversation-hint";
import { useConversationStore } from "@/store/useConversation";

const MessagesContainer = () => {
  const [open, setOpen] = useState(true);

  const { selectedConversation } = useConversationStore((state) => state);

  return selectedConversation !== null ? (
    <div>
      {/* chat messages header */}
      <MessagesHeader />
      {/* chat messages container  */}
      <Messages />
    </div>
  ) : (
    <SelectConversationHint />
  );
};

export default MessagesContainer;
