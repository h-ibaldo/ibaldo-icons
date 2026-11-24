import type { DefineComponent } from 'vue';

export interface BellXDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXDash: DefineComponent<BellXDashProps>;

export default BellXDash;
export { BellXDash };
