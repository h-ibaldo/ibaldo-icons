import type { DefineComponent } from 'vue';

export interface ChatQuestionSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionSharp: DefineComponent<ChatQuestionSharpProps>;

export default ChatQuestionSharp;
export { ChatQuestionSharp };
