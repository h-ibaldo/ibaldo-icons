import type { DefineComponent } from 'vue';

export interface ChatForwardCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerTooltip: DefineComponent<ChatForwardCornerTooltipProps>;

export default ChatForwardCornerTooltip;
export { ChatForwardCornerTooltip };
