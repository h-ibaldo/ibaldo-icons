import type { DefineComponent } from 'vue';

export interface ChatXDoubleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleSlant: DefineComponent<ChatXDoubleSlantProps>;

export default ChatXDoubleSlant;
export { ChatXDoubleSlant };
