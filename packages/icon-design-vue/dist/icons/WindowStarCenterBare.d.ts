import type { DefineComponent } from 'vue';

export interface WindowStarCenterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStarCenterBare: DefineComponent<WindowStarCenterBareProps>;

export default WindowStarCenterBare;
export { WindowStarCenterBare };
