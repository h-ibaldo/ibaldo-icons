import type { DefineComponent } from 'vue';

export interface ChatStackEditTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditTooltip: DefineComponent<ChatStackEditTooltipProps>;

export default ChatStackEditTooltip;
export { ChatStackEditTooltip };
