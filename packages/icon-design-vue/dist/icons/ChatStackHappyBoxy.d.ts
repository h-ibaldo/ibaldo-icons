import type { DefineComponent } from 'vue';

export interface ChatStackHappyBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyBoxy: DefineComponent<ChatStackHappyBoxyProps>;

export default ChatStackHappyBoxy;
export { ChatStackHappyBoxy };
