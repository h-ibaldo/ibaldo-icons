import { SvelteComponent } from 'svelte';

export interface FingerprintCurlStemProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintCurlStem extends SvelteComponent<FingerprintCurlStemProps> {}
