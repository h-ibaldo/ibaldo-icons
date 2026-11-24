import type { DefineComponent } from 'vue';

export interface BluetoothCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothCircle: DefineComponent<BluetoothCircleProps>;

export default BluetoothCircle;
export { BluetoothCircle };
