import type { DefineComponent } from 'vue';

export interface ChatHeartRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartRound: DefineComponent<ChatHeartRoundProps>;

export default ChatHeartRound;
export { ChatHeartRound };
