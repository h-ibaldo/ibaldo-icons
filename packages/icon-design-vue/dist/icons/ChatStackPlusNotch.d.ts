import type { DefineComponent } from 'vue';

export interface ChatStackPlusNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusNotch: DefineComponent<ChatStackPlusNotchProps>;

export default ChatStackPlusNotch;
export { ChatStackPlusNotch };
