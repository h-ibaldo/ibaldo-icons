import type { DefineComponent } from 'vue';

export interface ChatStackPlusCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusCornerNotch: DefineComponent<ChatStackPlusCornerNotchProps>;

export default ChatStackPlusCornerNotch;
export { ChatStackPlusCornerNotch };
