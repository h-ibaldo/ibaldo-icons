import type { DefineComponent } from 'vue';

export interface ChatStackSunNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSunNotch: DefineComponent<ChatStackSunNotchProps>;

export default ChatStackSunNotch;
export { ChatStackSunNotch };
