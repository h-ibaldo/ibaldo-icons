import type { DefineComponent } from 'vue';

export interface ChatListSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListSharp: DefineComponent<ChatListSharpProps>;

export default ChatListSharp;
export { ChatListSharp };
