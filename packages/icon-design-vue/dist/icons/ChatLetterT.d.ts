import type { DefineComponent } from 'vue';

export interface ChatLetterTProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterT: DefineComponent<ChatLetterTProps>;

export default ChatLetterT;
export { ChatLetterT };
