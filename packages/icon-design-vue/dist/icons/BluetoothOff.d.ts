import type { DefineComponent } from 'vue';

export interface BluetoothOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothOff: DefineComponent<BluetoothOffProps>;

export default BluetoothOff;
export { BluetoothOff };
