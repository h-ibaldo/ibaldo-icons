import type { DefineComponent } from 'vue';

export interface ChatOneCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircle: DefineComponent<ChatOneCircleProps>;

export default ChatOneCircle;
export { ChatOneCircle };
