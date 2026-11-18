import { SvelteComponent } from 'svelte';

export interface BluetoothRingNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothRingNarrow extends SvelteComponent<BluetoothRingNarrowProps> {}
