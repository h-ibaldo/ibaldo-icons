import type { DefineComponent } from 'vue';

export interface ChatEqualsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsRound: DefineComponent<ChatEqualsRoundProps>;

export default ChatEqualsRound;
export { ChatEqualsRound };
