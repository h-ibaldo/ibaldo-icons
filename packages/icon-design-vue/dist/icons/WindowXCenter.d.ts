import type { DefineComponent } from 'vue';

export interface WindowXCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowXCenter: DefineComponent<WindowXCenterProps>;

export default WindowXCenter;
export { WindowXCenter };
