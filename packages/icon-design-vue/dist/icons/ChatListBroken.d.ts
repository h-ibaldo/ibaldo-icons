import type { DefineComponent } from 'vue';

export interface ChatListBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListBroken: DefineComponent<ChatListBrokenProps>;

export default ChatListBroken;
export { ChatListBroken };
