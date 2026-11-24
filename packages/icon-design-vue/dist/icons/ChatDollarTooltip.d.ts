import type { DefineComponent } from 'vue';

export interface ChatDollarTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarTooltip: DefineComponent<ChatDollarTooltipProps>;

export default ChatDollarTooltip;
export { ChatDollarTooltip };
