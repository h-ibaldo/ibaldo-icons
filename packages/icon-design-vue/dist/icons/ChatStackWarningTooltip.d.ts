import type { DefineComponent } from 'vue';

export interface ChatStackWarningTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningTooltip: DefineComponent<ChatStackWarningTooltipProps>;

export default ChatStackWarningTooltip;
export { ChatStackWarningTooltip };
