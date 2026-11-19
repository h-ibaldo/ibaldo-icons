import type { DefineComponent } from 'vue';

export interface BatteryEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryEmpty: DefineComponent<BatteryEmptyProps>;

export default BatteryEmpty;
export { BatteryEmpty };
