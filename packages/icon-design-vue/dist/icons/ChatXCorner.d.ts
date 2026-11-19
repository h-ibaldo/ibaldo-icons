import type { DefineComponent } from 'vue';

export interface ChatXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCorner: DefineComponent<ChatXCornerProps>;

export default ChatXCorner;
export { ChatXCorner };
