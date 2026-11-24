import type { DefineComponent } from 'vue';

export interface BellTiltedDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTiltedDash: DefineComponent<BellTiltedDashProps>;

export default BellTiltedDash;
export { BellTiltedDash };
