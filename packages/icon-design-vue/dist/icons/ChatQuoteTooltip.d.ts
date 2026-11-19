import type { DefineComponent } from 'vue';

export interface ChatQuoteTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteTooltip: DefineComponent<ChatQuoteTooltipProps>;

export default ChatQuoteTooltip;
export { ChatQuoteTooltip };
