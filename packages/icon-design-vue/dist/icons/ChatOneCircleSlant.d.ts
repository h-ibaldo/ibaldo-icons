import type { DefineComponent } from 'vue';

export interface ChatOneCircleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleSlant: DefineComponent<ChatOneCircleSlantProps>;

export default ChatOneCircleSlant;
export { ChatOneCircleSlant };
