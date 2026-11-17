import { SvelteComponent } from 'svelte';

export interface FingerprintDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintDotted extends SvelteComponent<FingerprintDottedProps> {}
