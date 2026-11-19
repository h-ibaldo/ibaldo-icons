import type { DefineComponent } from 'vue';

export interface BluetoothRectangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothRectangle: DefineComponent<BluetoothRectangleProps>;

export default BluetoothRectangle;
export { BluetoothRectangle };
