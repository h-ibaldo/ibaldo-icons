import type { DefineComponent } from 'vue';

export interface SunDottedRadiantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDottedRadiant: DefineComponent<SunDottedRadiantProps>;

export default SunDottedRadiant;
export { SunDottedRadiant };
