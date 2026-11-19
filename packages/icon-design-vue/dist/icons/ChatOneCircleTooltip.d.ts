import type { DefineComponent } from 'vue';

export interface ChatOneCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleTooltip: DefineComponent<ChatOneCircleTooltipProps>;

export default ChatOneCircleTooltip;
export { ChatOneCircleTooltip };
