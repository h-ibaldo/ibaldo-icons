import { SvelteComponent } from 'svelte';

export interface EarbudsBluetoothProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EarbudsBluetooth extends SvelteComponent<EarbudsBluetoothProps> {}
