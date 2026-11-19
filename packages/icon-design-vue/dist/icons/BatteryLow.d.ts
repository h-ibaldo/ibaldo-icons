import type { DefineComponent } from 'vue';

export interface BatteryLowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryLow: DefineComponent<BatteryLowProps>;

export default BatteryLow;
export { BatteryLow };
