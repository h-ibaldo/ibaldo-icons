import { SvelteComponent } from 'svelte';

export interface FingerprintDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintDashed extends SvelteComponent<FingerprintDashedProps> {}
