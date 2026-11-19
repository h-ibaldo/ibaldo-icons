import type { DefineComponent } from 'vue';

export interface ChatStackInfoNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoNotch: DefineComponent<ChatStackInfoNotchProps>;

export default ChatStackInfoNotch;
export { ChatStackInfoNotch };
