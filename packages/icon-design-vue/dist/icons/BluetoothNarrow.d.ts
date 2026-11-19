import type { DefineComponent } from 'vue';

export interface BluetoothNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothNarrow: DefineComponent<BluetoothNarrowProps>;

export default BluetoothNarrow;
export { BluetoothNarrow };
