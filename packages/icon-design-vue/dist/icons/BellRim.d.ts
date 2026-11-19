import type { DefineComponent } from 'vue';

export interface BellRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRim: DefineComponent<BellRimProps>;

export default BellRim;
export { BellRim };
