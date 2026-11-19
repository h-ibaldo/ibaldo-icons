import type { DefineComponent } from 'vue';

export interface BellRingDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingDash: DefineComponent<BellRingDashProps>;

export default BellRingDash;
export { BellRingDash };
