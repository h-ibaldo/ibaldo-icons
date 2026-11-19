import type { DefineComponent } from 'vue';

export interface ChatTextSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextSlant: DefineComponent<ChatTextSlantProps>;

export default ChatTextSlant;
export { ChatTextSlant };
