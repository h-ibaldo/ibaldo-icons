import type { DefineComponent } from 'vue';

export interface SunStarHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarHalf: DefineComponent<SunStarHalfProps>;

export default SunStarHalf;
export { SunStarHalf };
