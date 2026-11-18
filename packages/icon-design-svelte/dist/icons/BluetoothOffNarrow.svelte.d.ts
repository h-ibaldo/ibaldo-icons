import { SvelteComponent } from 'svelte';

export interface BluetoothOffNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothOffNarrow extends SvelteComponent<BluetoothOffNarrowProps> {}
