import type { DefineComponent } from 'vue';

export interface ChatStackOneCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircle: DefineComponent<ChatStackOneCircleProps>;

export default ChatStackOneCircle;
export { ChatStackOneCircle };
