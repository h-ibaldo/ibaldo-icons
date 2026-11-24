import type { DefineComponent } from 'vue';

export interface ChatDotsTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsTooltip: DefineComponent<ChatDotsTooltipProps>;

export default ChatDotsTooltip;
export { ChatDotsTooltip };
