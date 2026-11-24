import type { DefineComponent } from 'vue';

export interface ChatMinusCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleTooltip: DefineComponent<ChatMinusCircleTooltipProps>;

export default ChatMinusCircleTooltip;
export { ChatMinusCircleTooltip };
