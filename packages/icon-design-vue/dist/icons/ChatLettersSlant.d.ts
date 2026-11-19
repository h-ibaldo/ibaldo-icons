import type { DefineComponent } from 'vue';

export interface ChatLettersSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersSlant: DefineComponent<ChatLettersSlantProps>;

export default ChatLettersSlant;
export { ChatLettersSlant };
