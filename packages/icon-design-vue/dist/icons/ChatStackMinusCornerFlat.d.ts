import type { DefineComponent } from 'vue';

export interface ChatStackMinusCornerFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCornerFlat: DefineComponent<ChatStackMinusCornerFlatProps>;

export default ChatStackMinusCornerFlat;
export { ChatStackMinusCornerFlat };
