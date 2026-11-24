import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineLayered: DefineComponent<ChatStackUnderlineLayeredProps>;

export default ChatStackUnderlineLayered;
export { ChatStackUnderlineLayered };
