import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineTypingSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingSlant: DefineComponent<ChatStackUnderlineTypingSlantProps>;

export default ChatStackUnderlineTypingSlant;
export { ChatStackUnderlineTypingSlant };
