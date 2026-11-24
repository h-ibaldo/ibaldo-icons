import { SvelteComponent } from 'svelte';

export interface BluetoothOffPillBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothOffPillBroken extends SvelteComponent<BluetoothOffPillBrokenProps> {}
