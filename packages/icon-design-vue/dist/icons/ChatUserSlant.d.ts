import type { DefineComponent } from 'vue';

export interface ChatUserSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserSlant: DefineComponent<ChatUserSlantProps>;

export default ChatUserSlant;
export { ChatUserSlant };
