import type { DefineComponent } from 'vue';

export interface ChatHashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHash: DefineComponent<ChatHashProps>;

export default ChatHash;
export { ChatHash };
