import type { DefineComponent } from 'vue';

export interface BatteryBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryBolt: DefineComponent<BatteryBoltProps>;

export default BatteryBolt;
export { BatteryBolt };
