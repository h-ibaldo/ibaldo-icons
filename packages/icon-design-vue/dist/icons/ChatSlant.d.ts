import type { DefineComponent } from 'vue';

export interface ChatSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSlant: DefineComponent<ChatSlantProps>;

export default ChatSlant;
export { ChatSlant };
