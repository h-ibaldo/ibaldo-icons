import type { DefineComponent } from 'vue';

export interface ChatStackCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheck: DefineComponent<ChatStackCheckProps>;

export default ChatStackCheck;
export { ChatStackCheck };
