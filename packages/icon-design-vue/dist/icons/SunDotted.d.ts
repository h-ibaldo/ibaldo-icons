import type { DefineComponent } from 'vue';

export interface SunDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDotted: DefineComponent<SunDottedProps>;

export default SunDotted;
export { SunDotted };
