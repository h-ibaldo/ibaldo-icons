import type { DefineComponent } from 'vue';

export interface BellCheckDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckDash: DefineComponent<BellCheckDashProps>;

export default BellCheckDash;
export { BellCheckDash };
