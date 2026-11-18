import { SvelteComponent } from 'svelte';

export interface BluetoothSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothSquare extends SvelteComponent<BluetoothSquareProps> {}
