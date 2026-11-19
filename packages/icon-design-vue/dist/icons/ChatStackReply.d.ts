import type { DefineComponent } from 'vue';

export interface ChatStackReplyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReply: DefineComponent<ChatStackReplyProps>;

export default ChatStackReply;
export { ChatStackReply };
