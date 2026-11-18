import { SvelteComponent } from 'svelte';

export interface BluetoothDotDoubleCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothDotDoubleCircle extends SvelteComponent<BluetoothDotDoubleCircleProps> {}
