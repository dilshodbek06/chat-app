import { create } from "zustand";

// Define the types for your conversation
type Conversation = {
  id: string;
  name: string;
  lastMessage: string;
  // Add more fields as per your conversation structure
};

// Zustand store for managing conversation state
type ConversationStore = {
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation) => void;
  clearConversation: () => void;
};

export const useConversationStore = create<ConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  clearConversation: () => set({ selectedConversation: null }),
}));
