import type { DefineComponent } from 'vue';

export interface ChatChartRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatChartRound: DefineComponent<ChatChartRoundProps>;

export default ChatChartRound;
export { ChatChartRound };
