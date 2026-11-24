import type { DefineComponent } from 'vue';

export interface ChatChartBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartBoxy: DefineComponent<ChatChartBoxyProps>;

export default ChatChartBoxy;
export { ChatChartBoxy };
