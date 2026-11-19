import type { DefineComponent } from 'vue';

export interface WindowCheckCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheckCenter: DefineComponent<WindowCheckCenterProps>;

export default WindowCheckCenter;
export { WindowCheckCenter };
