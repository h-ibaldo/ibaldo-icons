import type { DefineComponent } from 'vue';

export interface BatteryBoltBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryBoltBoxy: DefineComponent<BatteryBoltBoxyProps>;

export default BatteryBoltBoxy;
export { BatteryBoltBoxy };
