import type { DefineComponent } from 'vue';

export interface BluetoothDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothDots: DefineComponent<BluetoothDotsProps>;

export default BluetoothDots;
export { BluetoothDots };
