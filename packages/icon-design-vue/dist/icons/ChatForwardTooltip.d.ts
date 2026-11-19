import type { DefineComponent } from 'vue';

export interface ChatForwardTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardTooltip: DefineComponent<ChatForwardTooltipProps>;

export default ChatForwardTooltip;
export { ChatForwardTooltip };
