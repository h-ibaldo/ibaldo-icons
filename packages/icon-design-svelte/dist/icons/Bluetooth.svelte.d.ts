import { SvelteComponent } from 'svelte';

export interface BluetoothProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bluetooth extends SvelteComponent<BluetoothProps> {}
