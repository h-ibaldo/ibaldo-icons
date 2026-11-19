import type { DefineComponent } from 'vue';

export interface BellDotRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDotRim: DefineComponent<BellDotRimProps>;

export default BellDotRim;
export { BellDotRim };
