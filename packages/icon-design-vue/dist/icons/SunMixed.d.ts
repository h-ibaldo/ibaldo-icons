import type { DefineComponent } from 'vue';

export interface SunMixedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunMixed: DefineComponent<SunMixedProps>;

export default SunMixed;
export { SunMixed };
