import type { DefineComponent } from 'vue';

export interface BellDotDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDotDash: DefineComponent<BellDotDashProps>;

export default BellDotDash;
export { BellDotDash };
