import type { DefineComponent } from 'vue';

export interface ChatQuestionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestion: DefineComponent<ChatQuestionProps>;

export default ChatQuestion;
export { ChatQuestion };
