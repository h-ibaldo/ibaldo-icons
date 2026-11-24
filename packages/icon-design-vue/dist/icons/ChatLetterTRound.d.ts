import type { DefineComponent } from 'vue';

export interface ChatLetterTRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTRound: DefineComponent<ChatLetterTRoundProps>;

export default ChatLetterTRound;
export { ChatLetterTRound };
