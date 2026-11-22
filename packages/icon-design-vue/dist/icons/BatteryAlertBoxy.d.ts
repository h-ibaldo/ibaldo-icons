import type { DefineComponent } from 'vue';

export interface BatteryAlertBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryAlertBoxy: DefineComponent<BatteryAlertBoxyProps>;

export default BatteryAlertBoxy;
export { BatteryAlertBoxy };
