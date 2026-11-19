import type { DefineComponent } from 'vue';

export interface BellXCircleFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircleFlat: DefineComponent<BellXCircleFlatProps>;

export default BellXCircleFlat;
export { BellXCircleFlat };
