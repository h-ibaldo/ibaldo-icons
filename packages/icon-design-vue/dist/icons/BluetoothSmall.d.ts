import type { DefineComponent } from 'vue';

export interface BluetoothSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothSmall: DefineComponent<BluetoothSmallProps>;

export default BluetoothSmall;
export { BluetoothSmall };
