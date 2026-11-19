import type { DefineComponent } from 'vue';

export interface ChatListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatList: DefineComponent<ChatListProps>;

export default ChatList;
export { ChatList };
