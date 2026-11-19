import type { DefineComponent } from 'vue';

export interface SunShortLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunShortLarge: DefineComponent<SunShortLargeProps>;

export default SunShortLarge;
export { SunShortLarge };
