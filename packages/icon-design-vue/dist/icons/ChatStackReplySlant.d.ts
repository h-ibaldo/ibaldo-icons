import type { DefineComponent } from 'vue';

export interface ChatStackReplySlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplySlant: DefineComponent<ChatStackReplySlantProps>;

export default ChatStackReplySlant;
export { ChatStackReplySlant };
