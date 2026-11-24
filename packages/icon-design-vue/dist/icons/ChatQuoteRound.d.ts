import type { DefineComponent } from 'vue';

export interface ChatQuoteRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteRound: DefineComponent<ChatQuoteRoundProps>;

export default ChatQuoteRound;
export { ChatQuoteRound };
