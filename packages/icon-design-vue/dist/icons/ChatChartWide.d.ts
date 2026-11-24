import type { DefineComponent } from 'vue';

export interface ChatChartWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartWide: DefineComponent<ChatChartWideProps>;

export default ChatChartWide;
export { ChatChartWide };
