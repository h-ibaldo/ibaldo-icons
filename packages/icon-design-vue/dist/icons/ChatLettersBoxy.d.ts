import type { DefineComponent } from 'vue';

export interface ChatLettersBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersBoxy: DefineComponent<ChatLettersBoxyProps>;

export default ChatLettersBoxy;
export { ChatLettersBoxy };
