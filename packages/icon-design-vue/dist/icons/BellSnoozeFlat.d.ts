import type { DefineComponent } from 'vue';

export interface BellSnoozeFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSnoozeFlat: DefineComponent<BellSnoozeFlatProps>;

export default BellSnoozeFlat;
export { BellSnoozeFlat };
