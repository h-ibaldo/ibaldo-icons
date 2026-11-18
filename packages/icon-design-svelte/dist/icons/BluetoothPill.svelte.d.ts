import { SvelteComponent } from 'svelte';

export interface BluetoothPillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothPill extends SvelteComponent<BluetoothPillProps> {}
