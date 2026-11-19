import type { DefineComponent } from 'vue';

export interface ChatXCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerSlant: DefineComponent<ChatXCornerSlantProps>;

export default ChatXCornerSlant;
export { ChatXCornerSlant };
