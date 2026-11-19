import type { DefineComponent } from 'vue';

export interface BellOffDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOffDash: DefineComponent<BellOffDashProps>;

export default BellOffDash;
export { BellOffDash };
