import { SvelteComponent } from 'svelte';

export interface BluetoothCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothCircle extends SvelteComponent<BluetoothCircleProps> {}
