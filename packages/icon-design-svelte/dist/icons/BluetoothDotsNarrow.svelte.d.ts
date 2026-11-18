import { SvelteComponent } from 'svelte';

export interface BluetoothDotsNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothDotsNarrow extends SvelteComponent<BluetoothDotsNarrowProps> {}
