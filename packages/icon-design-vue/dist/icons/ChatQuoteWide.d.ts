import type { DefineComponent } from 'vue';

export interface ChatQuoteWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteWide: DefineComponent<ChatQuoteWideProps>;

export default ChatQuoteWide;
export { ChatQuoteWide };
