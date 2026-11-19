import type { DefineComponent } from 'vue';

export interface ChatCheckCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleRound: DefineComponent<ChatCheckCircleRoundProps>;

export default ChatCheckCircleRound;
export { ChatCheckCircleRound };
