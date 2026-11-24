import type { DefineComponent } from 'vue';

export interface WindowChatBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChatBare: DefineComponent<WindowChatBareProps>;

export default WindowChatBare;
export { WindowChatBare };
