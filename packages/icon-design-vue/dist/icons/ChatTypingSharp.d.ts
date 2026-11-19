import type { DefineComponent } from 'vue';

export interface ChatTypingSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingSharp: DefineComponent<ChatTypingSharpProps>;

export default ChatTypingSharp;
export { ChatTypingSharp };
