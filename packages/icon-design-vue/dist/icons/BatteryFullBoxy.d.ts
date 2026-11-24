import type { DefineComponent } from 'vue';

export interface BatteryFullBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryFullBoxy: DefineComponent<BatteryFullBoxyProps>;

export default BatteryFullBoxy;
export { BatteryFullBoxy };
