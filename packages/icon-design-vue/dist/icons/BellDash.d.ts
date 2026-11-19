import type { DefineComponent } from 'vue';

export interface BellDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDash: DefineComponent<BellDashProps>;

export default BellDash;
export { BellDash };
