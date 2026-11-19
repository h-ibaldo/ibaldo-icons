import type { DefineComponent } from 'vue';

export interface ChatLettersSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersSharp: DefineComponent<ChatLettersSharpProps>;

export default ChatLettersSharp;
export { ChatLettersSharp };
