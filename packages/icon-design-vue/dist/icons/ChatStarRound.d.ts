import type { DefineComponent } from 'vue';

export interface ChatStarRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarRound: DefineComponent<ChatStarRoundProps>;

export default ChatStarRound;
export { ChatStarRound };
