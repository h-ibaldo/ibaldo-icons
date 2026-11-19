import type { DefineComponent } from 'vue';

export interface BatteryMediumBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryMediumBoxy: DefineComponent<BatteryMediumBoxyProps>;

export default BatteryMediumBoxy;
export { BatteryMediumBoxy };
