import type { DefineComponent } from 'vue';

export interface ChatXSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXSlant: DefineComponent<ChatXSlantProps>;

export default ChatXSlant;
export { ChatXSlant };
