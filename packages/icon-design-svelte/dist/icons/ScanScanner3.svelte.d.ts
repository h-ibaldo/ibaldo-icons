import { SvelteComponent } from 'svelte';

export interface ScanScanner3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner3 extends SvelteComponent<ScanScanner3Props> {}
