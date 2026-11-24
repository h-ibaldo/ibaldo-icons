import type { DefineComponent } from 'vue';

export interface SunStarHalfSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarHalfSquare: DefineComponent<SunStarHalfSquareProps>;

export default SunStarHalfSquare;
export { SunStarHalfSquare };
