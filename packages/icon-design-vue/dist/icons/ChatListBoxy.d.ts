import type { DefineComponent } from 'vue';

export interface ChatListBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListBoxy: DefineComponent<ChatListBoxyProps>;

export default ChatListBoxy;
export { ChatListBoxy };
