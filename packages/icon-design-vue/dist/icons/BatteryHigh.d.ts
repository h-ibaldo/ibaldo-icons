import type { DefineComponent } from 'vue';

export interface BatteryHighProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryHigh: DefineComponent<BatteryHighProps>;

export default BatteryHigh;
export { BatteryHigh };
