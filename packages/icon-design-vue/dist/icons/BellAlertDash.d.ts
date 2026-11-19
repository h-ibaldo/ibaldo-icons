import type { DefineComponent } from 'vue';

export interface BellAlertDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellAlertDash: DefineComponent<BellAlertDashProps>;

export default BellAlertDash;
export { BellAlertDash };
