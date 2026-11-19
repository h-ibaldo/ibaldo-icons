import type { DefineComponent } from 'vue';

export interface BatteryLowBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryLowBoxy: DefineComponent<BatteryLowBoxyProps>;

export default BatteryLowBoxy;
export { BatteryLowBoxy };
