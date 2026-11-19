import type { DefineComponent } from 'vue';

export interface ChatAlertTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertTooltip: DefineComponent<ChatAlertTooltipProps>;

export default ChatAlertTooltip;
export { ChatAlertTooltip };
