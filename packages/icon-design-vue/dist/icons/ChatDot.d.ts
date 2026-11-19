import type { DefineComponent } from 'vue';

export interface ChatDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDot: DefineComponent<ChatDotProps>;

export default ChatDot;
export { ChatDot };
