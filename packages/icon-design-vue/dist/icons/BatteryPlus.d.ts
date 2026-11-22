import type { DefineComponent } from 'vue';

export interface BatteryPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryPlus: DefineComponent<BatteryPlusProps>;

export default BatteryPlus;
export { BatteryPlus };
