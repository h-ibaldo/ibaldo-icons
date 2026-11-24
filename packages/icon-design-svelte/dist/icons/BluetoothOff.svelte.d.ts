import { SvelteComponent } from 'svelte';

export interface BluetoothOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothOff extends SvelteComponent<BluetoothOffProps> {}
