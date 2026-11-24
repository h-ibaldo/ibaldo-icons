import type { DefineComponent } from 'vue';

export interface ChatStackMinusCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCornerNotch: DefineComponent<ChatStackMinusCornerNotchProps>;

export default ChatStackMinusCornerNotch;
export { ChatStackMinusCornerNotch };
