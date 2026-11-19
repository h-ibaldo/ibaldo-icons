import type { DefineComponent } from 'vue';

export interface BluetoothOffNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothOffNarrow: DefineComponent<BluetoothOffNarrowProps>;

export default BluetoothOffNarrow;
export { BluetoothOffNarrow };
