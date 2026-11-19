import type { DefineComponent } from 'vue';

export interface ChatStackHashNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHashNotch: DefineComponent<ChatStackHashNotchProps>;

export default ChatStackHashNotch;
export { ChatStackHashNotch };
