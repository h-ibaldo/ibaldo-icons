import type { DefineComponent } from 'vue';

export interface ChatQuoteSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteSharp: DefineComponent<ChatQuoteSharpProps>;

export default ChatQuoteSharp;
export { ChatQuoteSharp };
