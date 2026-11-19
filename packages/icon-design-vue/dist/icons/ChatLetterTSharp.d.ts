import type { DefineComponent } from 'vue';

export interface ChatLetterTSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTSharp: DefineComponent<ChatLetterTSharpProps>;

export default ChatLetterTSharp;
export { ChatLetterTSharp };
