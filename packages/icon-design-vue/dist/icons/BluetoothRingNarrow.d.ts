import type { DefineComponent } from 'vue';

export interface BluetoothRingNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothRingNarrow: DefineComponent<BluetoothRingNarrowProps>;

export default BluetoothRingNarrow;
export { BluetoothRingNarrow };
