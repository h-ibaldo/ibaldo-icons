import type { DefineComponent } from 'vue';

export interface ChatLettersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetters: DefineComponent<ChatLettersProps>;

export default ChatLetters;
export { ChatLetters };
