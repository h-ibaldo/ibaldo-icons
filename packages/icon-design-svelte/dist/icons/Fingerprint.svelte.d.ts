import { SvelteComponent } from 'svelte';

export interface FingerprintProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fingerprint extends SvelteComponent<FingerprintProps> {}
