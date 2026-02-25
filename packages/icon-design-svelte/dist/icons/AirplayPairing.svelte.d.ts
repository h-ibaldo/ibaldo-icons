import { SvelteComponent } from 'svelte';

export interface AirplayPairingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplayPairing extends SvelteComponent<AirplayPairingProps> {}
