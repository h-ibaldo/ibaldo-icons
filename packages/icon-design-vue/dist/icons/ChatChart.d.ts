import type { DefineComponent } from 'vue';

export interface ChatChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChart: DefineComponent<ChatChartProps>;

export default ChatChart;
export { ChatChart };
