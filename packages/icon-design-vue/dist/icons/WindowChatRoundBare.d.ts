import type { DefineComponent } from 'vue';

export interface WindowChatRoundBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChatRoundBare: DefineComponent<WindowChatRoundBareProps>;

export default WindowChatRoundBare;
export { WindowChatRoundBare };
