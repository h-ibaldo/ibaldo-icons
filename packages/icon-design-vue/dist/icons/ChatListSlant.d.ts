import type { DefineComponent } from 'vue';

export interface ChatListSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListSlant: DefineComponent<ChatListSlantProps>;

export default ChatListSlant;
export { ChatListSlant };
