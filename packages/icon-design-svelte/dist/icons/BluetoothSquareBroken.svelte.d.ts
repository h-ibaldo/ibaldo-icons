import { SvelteComponent } from 'svelte';

export interface BluetoothSquareBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothSquareBroken extends SvelteComponent<BluetoothSquareBrokenProps> {}
