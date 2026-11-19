import type { DefineComponent } from 'vue';

export interface ChatStackMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinus: DefineComponent<ChatStackMinusProps>;

export default ChatStackMinus;
export { ChatStackMinus };
