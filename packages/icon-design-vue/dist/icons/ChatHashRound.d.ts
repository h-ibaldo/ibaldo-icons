import type { DefineComponent } from 'vue';

export interface ChatHashRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashRound: DefineComponent<ChatHashRoundProps>;

export default ChatHashRound;
export { ChatHashRound };
