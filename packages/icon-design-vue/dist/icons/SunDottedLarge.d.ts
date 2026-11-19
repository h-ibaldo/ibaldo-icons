import type { DefineComponent } from 'vue';

export interface SunDottedLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDottedLarge: DefineComponent<SunDottedLargeProps>;

export default SunDottedLarge;
export { SunDottedLarge };
