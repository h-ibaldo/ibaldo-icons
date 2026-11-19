import type { DefineComponent } from 'vue';

export interface ChatDotRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotRound: DefineComponent<ChatDotRoundProps>;

export default ChatDotRound;
export { ChatDotRound };
