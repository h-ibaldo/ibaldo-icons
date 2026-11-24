import type { DefineComponent } from 'vue';

export interface ChatForwardSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardSlant: DefineComponent<ChatForwardSlantProps>;

export default ChatForwardSlant;
export { ChatForwardSlant };
