import type { DefineComponent } from 'vue';

export interface BellTiltedRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTiltedRim: DefineComponent<BellTiltedRimProps>;

export default BellTiltedRim;
export { BellTiltedRim };
