import type { DefineComponent } from 'vue';

export interface ChatChartSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartSharp: DefineComponent<ChatChartSharpProps>;

export default ChatChartSharp;
export { ChatChartSharp };
