import type { DefineComponent } from 'vue';

export interface WindowChatCornerBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChatCornerBare: DefineComponent<WindowChatCornerBareProps>;

export default WindowChatCornerBare;
export { WindowChatCornerBare };
