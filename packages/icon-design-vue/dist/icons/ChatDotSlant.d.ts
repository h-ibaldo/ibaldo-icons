import type { DefineComponent } from 'vue';

export interface ChatDotSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotSlant: DefineComponent<ChatDotSlantProps>;

export default ChatDotSlant;
export { ChatDotSlant };
