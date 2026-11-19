import type { DefineComponent } from 'vue';

export interface ChatStackMinusFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusFacing: DefineComponent<ChatStackMinusFacingProps>;

export default ChatStackMinusFacing;
export { ChatStackMinusFacing };
