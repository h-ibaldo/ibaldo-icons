import type { DefineComponent } from 'vue';

export interface ChatStackTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackText: DefineComponent<ChatStackTextProps>;

export default ChatStackText;
export { ChatStackText };
