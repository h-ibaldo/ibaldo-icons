import type { DefineComponent } from 'vue';

export interface BluetoothSquareBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothSquareBroken: DefineComponent<BluetoothSquareBrokenProps>;

export default BluetoothSquareBroken;
export { BluetoothSquareBroken };
