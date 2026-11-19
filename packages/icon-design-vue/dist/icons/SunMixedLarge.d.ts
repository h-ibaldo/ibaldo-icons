import type { DefineComponent } from 'vue';

export interface SunMixedLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunMixedLarge: DefineComponent<SunMixedLargeProps>;

export default SunMixedLarge;
export { SunMixedLarge };
