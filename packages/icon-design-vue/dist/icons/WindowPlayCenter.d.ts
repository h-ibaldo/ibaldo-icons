import type { DefineComponent } from 'vue';

export interface WindowPlayCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlayCenter: DefineComponent<WindowPlayCenterProps>;

export default WindowPlayCenter;
export { WindowPlayCenter };
