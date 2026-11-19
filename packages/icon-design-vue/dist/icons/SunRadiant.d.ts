import type { DefineComponent } from 'vue';

export interface SunRadiantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunRadiant: DefineComponent<SunRadiantProps>;

export default SunRadiant;
export { SunRadiant };
