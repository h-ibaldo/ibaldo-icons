import type { DefineComponent } from 'vue';

export interface ChatReplyAllSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllSlant: DefineComponent<ChatReplyAllSlantProps>;

export default ChatReplyAllSlant;
export { ChatReplyAllSlant };
