import type { DefineComponent } from 'vue';

export interface ChatStackHappySlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHappySlant: DefineComponent<ChatStackHappySlantProps>;

export default ChatStackHappySlant;
export { ChatStackHappySlant };
