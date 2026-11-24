import type { DefineComponent } from 'vue';

export interface WindowStarBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStarBare: DefineComponent<WindowStarBareProps>;

export default WindowStarBare;
export { WindowStarBare };
