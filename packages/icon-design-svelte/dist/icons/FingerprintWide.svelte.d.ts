import { SvelteComponent } from 'svelte';

export interface FingerprintWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FingerprintWide extends SvelteComponent<FingerprintWideProps> {}
