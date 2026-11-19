import type { DefineComponent } from 'vue';

export interface BellRingLinesRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLinesRim: DefineComponent<BellRingLinesRimProps>;

export default BellRingLinesRim;
export { BellRingLinesRim };
