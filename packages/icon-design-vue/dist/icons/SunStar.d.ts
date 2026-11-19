import type { DefineComponent } from 'vue';

export interface SunStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStar: DefineComponent<SunStarProps>;

export default SunStar;
export { SunStar };
