import type { DefineComponent } from 'vue';

export interface ChatDotsCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleTooltip: DefineComponent<ChatDotsCircleTooltipProps>;

export default ChatDotsCircleTooltip;
export { ChatDotsCircleTooltip };
