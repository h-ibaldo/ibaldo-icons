import type { DefineComponent } from 'vue';

export interface ChatQuestionWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionWide: DefineComponent<ChatQuestionWideProps>;

export default ChatQuestionWide;
export { ChatQuestionWide };
