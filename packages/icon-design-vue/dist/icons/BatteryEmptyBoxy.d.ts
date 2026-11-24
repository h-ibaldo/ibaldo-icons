import type { DefineComponent } from 'vue';

export interface BatteryEmptyBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryEmptyBoxy: DefineComponent<BatteryEmptyBoxyProps>;

export default BatteryEmptyBoxy;
export { BatteryEmptyBoxy };
