import type { DefineComponent } from 'vue';

export interface ChatHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeart: DefineComponent<ChatHeartProps>;

export default ChatHeart;
export { ChatHeart };
