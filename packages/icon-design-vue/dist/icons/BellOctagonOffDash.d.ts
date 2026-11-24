import type { DefineComponent } from 'vue';

export interface BellOctagonOffDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOctagonOffDash: DefineComponent<BellOctagonOffDashProps>;

export default BellOctagonOffDash;
export { BellOctagonOffDash };
