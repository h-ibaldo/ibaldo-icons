import type { DefineComponent } from 'vue';

export interface ChatStackHappyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHappy: DefineComponent<ChatStackHappyProps>;

export default ChatStackHappy;
export { ChatStackHappy };
