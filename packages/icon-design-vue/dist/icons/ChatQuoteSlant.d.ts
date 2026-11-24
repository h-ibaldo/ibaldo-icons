import type { DefineComponent } from 'vue';

export interface ChatQuoteSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteSlant: DefineComponent<ChatQuoteSlantProps>;

export default ChatQuoteSlant;
export { ChatQuoteSlant };
