import type { DefineComponent } from 'vue';

export interface ChatChartTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartTooltip: DefineComponent<ChatChartTooltipProps>;

export default ChatChartTooltip;
export { ChatChartTooltip };
