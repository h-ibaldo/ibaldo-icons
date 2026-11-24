import type { DefineComponent } from 'vue';

export interface ChatStackSunProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSun: DefineComponent<ChatStackSunProps>;

export default ChatStackSun;
export { ChatStackSun };
