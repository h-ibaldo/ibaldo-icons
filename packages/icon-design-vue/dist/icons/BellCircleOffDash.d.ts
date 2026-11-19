import type { DefineComponent } from 'vue';

export interface BellCircleOffDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCircleOffDash: DefineComponent<BellCircleOffDashProps>;

export default BellCircleOffDash;
export { BellCircleOffDash };
