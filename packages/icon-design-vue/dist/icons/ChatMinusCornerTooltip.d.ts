import type { DefineComponent } from 'vue';

export interface ChatMinusCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerTooltip: DefineComponent<ChatMinusCornerTooltipProps>;

export default ChatMinusCornerTooltip;
export { ChatMinusCornerTooltip };
