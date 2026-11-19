import type { DefineComponent } from 'vue';

export interface BatteryPlugBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryPlugBoxy: DefineComponent<BatteryPlugBoxyProps>;

export default BatteryPlugBoxy;
export { BatteryPlugBoxy };
