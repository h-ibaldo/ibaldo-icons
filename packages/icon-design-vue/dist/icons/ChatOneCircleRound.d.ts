import type { DefineComponent } from 'vue';

export interface ChatOneCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleRound: DefineComponent<ChatOneCircleRoundProps>;

export default ChatOneCircleRound;
export { ChatOneCircleRound };
