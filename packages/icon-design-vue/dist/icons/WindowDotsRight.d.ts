import type { DefineComponent } from 'vue';

export interface WindowDotsRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowDotsRight: DefineComponent<WindowDotsRightProps>;

export default WindowDotsRight;
export { WindowDotsRight };
