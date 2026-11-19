import type { DefineComponent } from 'vue';

export interface ChatXCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleTooltip: DefineComponent<ChatXCircleTooltipProps>;

export default ChatXCircleTooltip;
export { ChatXCircleTooltip };
