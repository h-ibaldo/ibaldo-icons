import type { DefineComponent } from 'vue';

export interface ChatStackTypingSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingSlant: DefineComponent<ChatStackTypingSlantProps>;

export default ChatStackTypingSlant;
export { ChatStackTypingSlant };
