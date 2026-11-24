import type { DefineComponent } from 'vue';

export interface BellOctagonDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOctagonDash: DefineComponent<BellOctagonDashProps>;

export default BellOctagonDash;
export { BellOctagonDash };
