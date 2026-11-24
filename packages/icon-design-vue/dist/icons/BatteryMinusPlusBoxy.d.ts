import type { DefineComponent } from 'vue';

export interface BatteryMinusPlusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryMinusPlusBoxy: DefineComponent<BatteryMinusPlusBoxyProps>;

export default BatteryMinusPlusBoxy;
export { BatteryMinusPlusBoxy };
