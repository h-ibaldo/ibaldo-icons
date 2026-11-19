import type { DefineComponent } from 'vue';

export interface ChatStackReplyAllProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAll: DefineComponent<ChatStackReplyAllProps>;

export default ChatStackReplyAll;
export { ChatStackReplyAll };
