import type { DefineComponent } from 'vue';

export interface ChatHashSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashSlant: DefineComponent<ChatHashSlantProps>;

export default ChatHashSlant;
export { ChatHashSlant };
