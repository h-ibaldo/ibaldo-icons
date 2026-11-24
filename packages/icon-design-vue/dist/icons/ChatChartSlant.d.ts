import type { DefineComponent } from 'vue';

export interface ChatChartSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartSlant: DefineComponent<ChatChartSlantProps>;

export default ChatChartSlant;
export { ChatChartSlant };
