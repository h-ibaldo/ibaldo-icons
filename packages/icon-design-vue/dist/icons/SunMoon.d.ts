import type { DefineComponent } from 'vue';

export interface SunMoonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunMoon: DefineComponent<SunMoonProps>;

export default SunMoon;
export { SunMoon };
