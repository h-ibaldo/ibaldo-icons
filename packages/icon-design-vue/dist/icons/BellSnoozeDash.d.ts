import type { DefineComponent } from 'vue';

export interface BellSnoozeDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSnoozeDash: DefineComponent<BellSnoozeDashProps>;

export default BellSnoozeDash;
export { BellSnoozeDash };
