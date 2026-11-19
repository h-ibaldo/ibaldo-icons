import type { DefineComponent } from 'vue';

export interface ChatStackPlusCornerFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusCornerFlat: DefineComponent<ChatStackPlusCornerFlatProps>;

export default ChatStackPlusCornerFlat;
export { ChatStackPlusCornerFlat };
