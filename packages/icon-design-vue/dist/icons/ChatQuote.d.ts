import type { DefineComponent } from 'vue';

export interface ChatQuoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuote: DefineComponent<ChatQuoteProps>;

export default ChatQuote;
export { ChatQuote };
