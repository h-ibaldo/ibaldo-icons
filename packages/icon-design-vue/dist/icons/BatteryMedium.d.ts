import type { DefineComponent } from 'vue';

export interface BatteryMediumProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryMedium: DefineComponent<BatteryMediumProps>;

export default BatteryMedium;
export { BatteryMedium };
