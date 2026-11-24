import type { DefineComponent } from 'vue';

export interface ChatQuestionBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionBroken: DefineComponent<ChatQuestionBrokenProps>;

export default ChatQuestionBroken;
export { ChatQuestionBroken };
