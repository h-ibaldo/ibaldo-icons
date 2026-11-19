import type { DefineComponent } from 'vue';

export interface ChatStackSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSlant: DefineComponent<ChatStackSlantProps>;

export default ChatStackSlant;
export { ChatStackSlant };
