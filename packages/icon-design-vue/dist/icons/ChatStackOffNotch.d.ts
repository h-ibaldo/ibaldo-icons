import type { DefineComponent } from 'vue';

export interface ChatStackOffNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffNotch: DefineComponent<ChatStackOffNotchProps>;

export default ChatStackOffNotch;
export { ChatStackOffNotch };
