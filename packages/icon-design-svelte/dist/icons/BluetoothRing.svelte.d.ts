import { SvelteComponent } from 'svelte';

export interface BluetoothRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothRing extends SvelteComponent<BluetoothRingProps> {}
