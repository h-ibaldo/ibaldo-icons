import type { DefineComponent } from 'vue';

export interface SunMixedHugeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunMixedHuge: DefineComponent<SunMixedHugeProps>;

export default SunMixedHuge;
export { SunMixedHuge };
