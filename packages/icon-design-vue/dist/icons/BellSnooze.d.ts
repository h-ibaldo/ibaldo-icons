import type { DefineComponent } from 'vue';

export interface BellSnoozeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSnooze: DefineComponent<BellSnoozeProps>;

export default BellSnooze;
export { BellSnooze };
