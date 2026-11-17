import { SvelteComponent } from 'svelte';

export interface FingerprintSpiralProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintSpiral extends SvelteComponent<FingerprintSpiralProps> {}
