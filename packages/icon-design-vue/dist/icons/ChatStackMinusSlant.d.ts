import type { DefineComponent } from 'vue';

export interface ChatStackMinusSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusSlant: DefineComponent<ChatStackMinusSlantProps>;

export default ChatStackMinusSlant;
export { ChatStackMinusSlant };
