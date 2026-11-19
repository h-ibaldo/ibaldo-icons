import type { DefineComponent } from 'vue';

export interface BluetoothDotDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothDotDouble: DefineComponent<BluetoothDotDoubleProps>;

export default BluetoothDotDouble;
export { BluetoothDotDouble };
