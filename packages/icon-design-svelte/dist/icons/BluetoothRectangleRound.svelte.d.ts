import { SvelteComponent } from 'svelte';

export interface BluetoothRectangleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothRectangleRound extends SvelteComponent<BluetoothRectangleRoundProps> {}
