import type { DefineComponent } from 'vue';

export interface BatteryAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryAlert: DefineComponent<BatteryAlertProps>;

export default BatteryAlert;
export { BatteryAlert };
