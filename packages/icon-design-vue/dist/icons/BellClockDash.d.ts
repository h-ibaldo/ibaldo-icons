import type { DefineComponent } from 'vue';

export interface BellClockDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClockDash: DefineComponent<BellClockDashProps>;

export default BellClockDash;
export { BellClockDash };
