import type { DefineComponent } from 'vue';

export interface SunStarSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarSquare: DefineComponent<SunStarSquareProps>;

export default SunStarSquare;
export { SunStarSquare };
