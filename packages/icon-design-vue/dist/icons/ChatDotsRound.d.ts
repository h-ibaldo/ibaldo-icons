import type { DefineComponent } from 'vue';

export interface ChatDotsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsRound: DefineComponent<ChatDotsRoundProps>;

export default ChatDotsRound;
export { ChatDotsRound };
