import type { DefineComponent } from 'vue';

export interface WindowStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStar: DefineComponent<WindowStarProps>;

export default WindowStar;
export { WindowStar };
