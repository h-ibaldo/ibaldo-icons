import type { DefineComponent } from 'vue';

export interface BluetoothRectangleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BluetoothRectangleRound: DefineComponent<BluetoothRectangleRoundProps>;

export default BluetoothRectangleRound;
export { BluetoothRectangleRound };
