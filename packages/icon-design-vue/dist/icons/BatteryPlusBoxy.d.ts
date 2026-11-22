import type { DefineComponent } from 'vue';

export interface BatteryPlusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryPlusBoxy: DefineComponent<BatteryPlusBoxyProps>;

export default BatteryPlusBoxy;
export { BatteryPlusBoxy };
