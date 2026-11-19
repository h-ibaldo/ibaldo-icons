import type { DefineComponent } from 'vue';

export interface ChatStackDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircle: DefineComponent<ChatStackDotsCircleProps>;

export default ChatStackDotsCircle;
export { ChatStackDotsCircle };
