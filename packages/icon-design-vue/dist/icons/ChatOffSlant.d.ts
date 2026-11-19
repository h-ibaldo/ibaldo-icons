import type { DefineComponent } from 'vue';

export interface ChatOffSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffSlant: DefineComponent<ChatOffSlantProps>;

export default ChatOffSlant;
export { ChatOffSlant };
