import type { DefineComponent } from 'vue';

export interface ChatSunProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSun: DefineComponent<ChatSunProps>;

export default ChatSun;
export { ChatSun };
