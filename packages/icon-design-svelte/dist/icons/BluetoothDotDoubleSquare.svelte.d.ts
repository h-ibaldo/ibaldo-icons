import { SvelteComponent } from 'svelte';

export interface BluetoothDotDoubleSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothDotDoubleSquare extends SvelteComponent<BluetoothDotDoubleSquareProps> {}
