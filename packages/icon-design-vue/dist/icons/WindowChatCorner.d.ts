import type { DefineComponent } from 'vue';

export interface WindowChatCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChatCorner: DefineComponent<WindowChatCornerProps>;

export default WindowChatCorner;
export { WindowChatCorner };
