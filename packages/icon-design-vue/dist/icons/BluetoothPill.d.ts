import type { DefineComponent } from 'vue';

export interface BluetoothPillProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothPill: DefineComponent<BluetoothPillProps>;

export default BluetoothPill;
export { BluetoothPill };
