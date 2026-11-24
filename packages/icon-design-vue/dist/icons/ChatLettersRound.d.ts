import type { DefineComponent } from 'vue';

export interface ChatLettersRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersRound: DefineComponent<ChatLettersRoundProps>;

export default ChatLettersRound;
export { ChatLettersRound };
