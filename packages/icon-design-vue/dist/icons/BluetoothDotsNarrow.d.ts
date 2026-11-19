import type { DefineComponent } from 'vue';

export interface BluetoothDotsNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothDotsNarrow: DefineComponent<BluetoothDotsNarrowProps>;

export default BluetoothDotsNarrow;
export { BluetoothDotsNarrow };
