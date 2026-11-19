import type { DefineComponent } from 'vue';

export interface ChatStackHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeart: DefineComponent<ChatStackHeartProps>;

export default ChatStackHeart;
export { ChatStackHeart };
