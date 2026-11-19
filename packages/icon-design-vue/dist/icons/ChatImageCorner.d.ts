import type { DefineComponent } from 'vue';

export interface ChatImageCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageCorner: DefineComponent<ChatImageCornerProps>;

export default ChatImageCorner;
export { ChatImageCorner };
