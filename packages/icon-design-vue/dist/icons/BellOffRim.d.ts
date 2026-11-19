import type { DefineComponent } from 'vue';

export interface BellOffRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOffRim: DefineComponent<BellOffRimProps>;

export default BellOffRim;
export { BellOffRim };
