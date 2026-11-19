import type { DefineComponent } from 'vue';

export interface ChatChartBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartBroken: DefineComponent<ChatChartBrokenProps>;

export default ChatChartBroken;
export { ChatChartBroken };
