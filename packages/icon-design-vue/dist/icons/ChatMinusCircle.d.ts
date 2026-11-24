import type { DefineComponent } from 'vue';

export interface ChatMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircle: DefineComponent<ChatMinusCircleProps>;

export default ChatMinusCircle;
export { ChatMinusCircle };
