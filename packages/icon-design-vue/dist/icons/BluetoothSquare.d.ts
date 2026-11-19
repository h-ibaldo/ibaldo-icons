import type { DefineComponent } from 'vue';

export interface BluetoothSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothSquare: DefineComponent<BluetoothSquareProps>;

export default BluetoothSquare;
export { BluetoothSquare };
