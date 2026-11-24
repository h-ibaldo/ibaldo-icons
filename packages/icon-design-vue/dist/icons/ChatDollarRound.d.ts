import type { DefineComponent } from 'vue';

export interface ChatDollarRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarRound: DefineComponent<ChatDollarRoundProps>;

export default ChatDollarRound;
export { ChatDollarRound };
