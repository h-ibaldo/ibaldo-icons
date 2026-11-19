import type { DefineComponent } from 'vue';

export interface BatteryTriangleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BatteryTriangleBoxy: DefineComponent<BatteryTriangleBoxyProps>;

export default BatteryTriangleBoxy;
export { BatteryTriangleBoxy };
