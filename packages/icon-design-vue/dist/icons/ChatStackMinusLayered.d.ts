import type { DefineComponent } from 'vue';

export interface ChatStackMinusLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusLayered: DefineComponent<ChatStackMinusLayeredProps>;

export default ChatStackMinusLayered;
export { ChatStackMinusLayered };
