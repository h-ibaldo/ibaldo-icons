import type { DefineComponent } from 'vue';

export interface ChatReplyAllProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAll: DefineComponent<ChatReplyAllProps>;

export default ChatReplyAll;
export { ChatReplyAll };
