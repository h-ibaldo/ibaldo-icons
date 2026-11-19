import type { DefineComponent } from 'vue';

export interface ChatInfoRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoRound: DefineComponent<ChatInfoRoundProps>;

export default ChatInfoRound;
export { ChatInfoRound };
