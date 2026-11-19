import type { DefineComponent } from 'vue';

export interface BellRingRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingRim: DefineComponent<BellRingRimProps>;

export default BellRingRim;
export { BellRingRim };
