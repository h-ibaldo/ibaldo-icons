import type { DefineComponent } from 'vue';

export interface WindowChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChat: DefineComponent<WindowChatProps>;

export default WindowChat;
export { WindowChat };
