import type { DefineComponent } from 'vue';

export interface ChatStackAlertTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertTooltip: DefineComponent<ChatStackAlertTooltipProps>;

export default ChatStackAlertTooltip;
export { ChatStackAlertTooltip };
