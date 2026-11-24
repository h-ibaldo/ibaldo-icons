import { SvelteComponent } from 'svelte';

export interface BluetoothDotDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothDotDouble extends SvelteComponent<BluetoothDotDoubleProps> {}
