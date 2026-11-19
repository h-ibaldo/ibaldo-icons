import type { DefineComponent } from 'vue';

export interface SunShortRadiantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunShortRadiant: DefineComponent<SunShortRadiantProps>;

export default SunShortRadiant;
export { SunShortRadiant };
