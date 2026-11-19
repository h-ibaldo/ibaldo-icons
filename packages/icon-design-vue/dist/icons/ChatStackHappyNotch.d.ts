import type { DefineComponent } from 'vue';

export interface ChatStackHappyNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyNotch: DefineComponent<ChatStackHappyNotchProps>;

export default ChatStackHappyNotch;
export { ChatStackHappyNotch };
