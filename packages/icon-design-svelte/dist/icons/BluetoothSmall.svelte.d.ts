import { SvelteComponent } from 'svelte';

export interface BluetoothSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothSmall extends SvelteComponent<BluetoothSmallProps> {}
