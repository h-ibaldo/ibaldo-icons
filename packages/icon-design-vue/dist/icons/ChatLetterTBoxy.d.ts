import type { DefineComponent } from 'vue';

export interface ChatLetterTBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTBoxy: DefineComponent<ChatLetterTBoxyProps>;

export default ChatLetterTBoxy;
export { ChatLetterTBoxy };
