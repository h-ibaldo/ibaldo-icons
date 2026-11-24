import type { DefineComponent } from 'vue';

export interface SunDottedBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDottedBig: DefineComponent<SunDottedBigProps>;

export default SunDottedBig;
export { SunDottedBig };
