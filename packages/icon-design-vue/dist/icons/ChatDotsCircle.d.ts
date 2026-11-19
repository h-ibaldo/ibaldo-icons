import type { DefineComponent } from 'vue';

export interface ChatDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircle: DefineComponent<ChatDotsCircleProps>;

export default ChatDotsCircle;
export { ChatDotsCircle };
