import type { DefineComponent } from 'vue';

export interface ChatQuestionRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionRound: DefineComponent<ChatQuestionRoundProps>;

export default ChatQuestionRound;
export { ChatQuestionRound };
