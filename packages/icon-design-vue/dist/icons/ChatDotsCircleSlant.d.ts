import type { DefineComponent } from 'vue';

export interface ChatDotsCircleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleSlant: DefineComponent<ChatDotsCircleSlantProps>;

export default ChatDotsCircleSlant;
export { ChatDotsCircleSlant };
