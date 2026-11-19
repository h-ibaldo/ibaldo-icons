import type { DefineComponent } from 'vue';

export interface SunMixedBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunMixedBig: DefineComponent<SunMixedBigProps>;

export default SunMixedBig;
export { SunMixedBig };
