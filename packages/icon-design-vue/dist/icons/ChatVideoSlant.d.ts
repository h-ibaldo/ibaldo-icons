import type { DefineComponent } from 'vue';

export interface ChatVideoSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoSlant: DefineComponent<ChatVideoSlantProps>;

export default ChatVideoSlant;
export { ChatVideoSlant };
