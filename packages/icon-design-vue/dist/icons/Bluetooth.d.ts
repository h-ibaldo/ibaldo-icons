import type { DefineComponent } from 'vue';

export interface BluetoothProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bluetooth: DefineComponent<BluetoothProps>;

export default Bluetooth;
export { Bluetooth };
