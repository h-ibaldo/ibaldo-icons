import type { DefineComponent } from 'vue';

export interface WindowStarCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStarCenter: DefineComponent<WindowStarCenterProps>;

export default WindowStarCenter;
export { WindowStarCenter };
