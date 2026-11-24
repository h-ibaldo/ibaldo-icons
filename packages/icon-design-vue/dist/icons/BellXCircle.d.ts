import type { DefineComponent } from 'vue';

export interface BellXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircle: DefineComponent<BellXCircleProps>;

export default BellXCircle;
export { BellXCircle };
