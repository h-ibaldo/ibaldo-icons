import type { DefineComponent } from 'vue';

export interface ChatReplyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReply: DefineComponent<ChatReplyProps>;

export default ChatReply;
export { ChatReply };
