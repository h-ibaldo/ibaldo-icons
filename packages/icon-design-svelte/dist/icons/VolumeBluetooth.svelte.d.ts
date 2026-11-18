import { SvelteComponent } from 'svelte';

export interface VolumeBluetoothProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeBluetooth extends SvelteComponent<VolumeBluetoothProps> {}
