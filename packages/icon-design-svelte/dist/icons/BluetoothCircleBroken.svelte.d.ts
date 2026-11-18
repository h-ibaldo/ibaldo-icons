import { SvelteComponent } from 'svelte';

export interface BluetoothCircleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothCircleBroken extends SvelteComponent<BluetoothCircleBrokenProps> {}
