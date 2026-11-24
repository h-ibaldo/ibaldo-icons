import type { DefineComponent } from 'vue';

export interface ChatStackDotsNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsNotch: DefineComponent<ChatStackDotsNotchProps>;

export default ChatStackDotsNotch;
export { ChatStackDotsNotch };
