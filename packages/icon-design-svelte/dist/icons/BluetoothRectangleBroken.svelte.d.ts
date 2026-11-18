import { SvelteComponent } from 'svelte';

export interface BluetoothRectangleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothRectangleBroken extends SvelteComponent<BluetoothRectangleBrokenProps> {}
