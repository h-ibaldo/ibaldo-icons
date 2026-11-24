import type { DefineComponent } from 'vue';

export interface BluetoothRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothRing: DefineComponent<BluetoothRingProps>;

export default BluetoothRing;
export { BluetoothRing };
