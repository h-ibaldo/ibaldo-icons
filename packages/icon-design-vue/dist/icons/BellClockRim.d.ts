import type { DefineComponent } from 'vue';

export interface BellClockRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClockRim: DefineComponent<BellClockRimProps>;

export default BellClockRim;
export { BellClockRim };
