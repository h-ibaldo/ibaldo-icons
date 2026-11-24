import type { DefineComponent } from 'vue';

export interface ChatUnderlineTypingSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTypingSlant: DefineComponent<ChatUnderlineTypingSlantProps>;

export default ChatUnderlineTypingSlant;
export { ChatUnderlineTypingSlant };
