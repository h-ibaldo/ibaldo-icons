import type { DefineComponent } from 'vue';

export interface BatteryFullProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryFull: DefineComponent<BatteryFullProps>;

export default BatteryFull;
export { BatteryFull };
