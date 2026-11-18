import { SvelteComponent } from 'svelte';

export interface BluetoothDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothDots extends SvelteComponent<BluetoothDotsProps> {}
