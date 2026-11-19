import type { DefineComponent } from 'vue';

export interface ChatQuestionSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionSlant: DefineComponent<ChatQuestionSlantProps>;

export default ChatQuestionSlant;
export { ChatQuestionSlant };
