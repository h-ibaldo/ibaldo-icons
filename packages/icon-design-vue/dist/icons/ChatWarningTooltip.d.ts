import type { DefineComponent } from 'vue';

export interface ChatWarningTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningTooltip: DefineComponent<ChatWarningTooltipProps>;

export default ChatWarningTooltip;
export { ChatWarningTooltip };
