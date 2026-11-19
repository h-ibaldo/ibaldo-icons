import type { DefineComponent } from 'vue';

export interface SunShortBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunShortBig: DefineComponent<SunShortBigProps>;

export default SunShortBig;
export { SunShortBig };
