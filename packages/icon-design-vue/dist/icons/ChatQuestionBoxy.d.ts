import type { DefineComponent } from 'vue';

export interface ChatQuestionBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionBoxy: DefineComponent<ChatQuestionBoxyProps>;

export default ChatQuestionBoxy;
export { ChatQuestionBoxy };
