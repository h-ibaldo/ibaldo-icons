import { SvelteComponent } from 'svelte';

export interface FingerprintSpiralDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintSpiralDashed extends SvelteComponent<FingerprintSpiralDashedProps> {}
