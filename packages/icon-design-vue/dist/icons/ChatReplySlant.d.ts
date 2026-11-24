import type { DefineComponent } from 'vue';

export interface ChatReplySlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplySlant: DefineComponent<ChatReplySlantProps>;

export default ChatReplySlant;
export { ChatReplySlant };
