import type { DefineComponent } from 'vue';

export interface BellXCircleRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircleRim: DefineComponent<BellXCircleRimProps>;

export default BellXCircleRim;
export { BellXCircleRim };
