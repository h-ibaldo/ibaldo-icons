import type { DefineComponent } from 'vue';

export interface EarbudsBluetoothProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EarbudsBluetooth: DefineComponent<EarbudsBluetoothProps>;

export default EarbudsBluetooth;
export { EarbudsBluetooth };
