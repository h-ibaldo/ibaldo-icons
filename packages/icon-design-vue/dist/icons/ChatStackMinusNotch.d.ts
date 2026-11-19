import type { DefineComponent } from 'vue';

export interface ChatStackMinusNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusNotch: DefineComponent<ChatStackMinusNotchProps>;

export default ChatStackMinusNotch;
export { ChatStackMinusNotch };
