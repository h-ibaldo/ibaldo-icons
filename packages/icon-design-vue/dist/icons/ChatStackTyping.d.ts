import type { DefineComponent } from 'vue';

export interface ChatStackTypingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTyping: DefineComponent<ChatStackTypingProps>;

export default ChatStackTyping;
export { ChatStackTyping };
