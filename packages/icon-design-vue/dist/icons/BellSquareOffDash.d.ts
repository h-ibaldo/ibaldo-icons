import type { DefineComponent } from 'vue';

export interface BellSquareOffDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquareOffDash: DefineComponent<BellSquareOffDashProps>;

export default BellSquareOffDash;
export { BellSquareOffDash };
