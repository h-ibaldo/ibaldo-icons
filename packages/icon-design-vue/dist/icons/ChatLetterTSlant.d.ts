import type { DefineComponent } from 'vue';

export interface ChatLetterTSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTSlant: DefineComponent<ChatLetterTSlantProps>;

export default ChatLetterTSlant;
export { ChatLetterTSlant };
