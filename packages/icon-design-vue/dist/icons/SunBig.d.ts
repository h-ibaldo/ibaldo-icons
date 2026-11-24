import type { DefineComponent } from 'vue';

export interface SunBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunBig: DefineComponent<SunBigProps>;

export default SunBig;
export { SunBig };
