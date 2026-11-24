import { SvelteComponent } from 'svelte';

export interface BluetoothRectangleRoundBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BluetoothRectangleRoundBroken extends SvelteComponent<BluetoothRectangleRoundBrokenProps> {}
