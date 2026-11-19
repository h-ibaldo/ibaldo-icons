import type { DefineComponent } from 'vue';

export interface VolumeBluetoothProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeBluetooth: DefineComponent<VolumeBluetoothProps>;

export default VolumeBluetooth;
export { VolumeBluetooth };
