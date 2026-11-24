import type { DefineComponent } from 'vue';

export interface SunStarBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarBig: DefineComponent<SunStarBigProps>;

export default SunStarBig;
export { SunStarBig };
