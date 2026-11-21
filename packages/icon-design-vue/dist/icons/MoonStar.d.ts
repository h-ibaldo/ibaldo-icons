import type { DefineComponent } from 'vue';

export interface MoonStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoonStar: DefineComponent<MoonStarProps>;

export default MoonStar;
export { MoonStar };
