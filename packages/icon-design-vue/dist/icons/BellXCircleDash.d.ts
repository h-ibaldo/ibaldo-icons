import type { DefineComponent } from 'vue';

export interface BellXCircleDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircleDash: DefineComponent<BellXCircleDashProps>;

export default BellXCircleDash;
export { BellXCircleDash };
