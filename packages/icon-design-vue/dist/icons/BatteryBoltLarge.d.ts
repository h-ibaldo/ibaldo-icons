import type { DefineComponent } from 'vue';

export interface BatteryBoltLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryBoltLarge: DefineComponent<BatteryBoltLargeProps>;

export default BatteryBoltLarge;
export { BatteryBoltLarge };
