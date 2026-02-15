import { SvelteComponent } from 'svelte';

export interface ScanScanner2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner2 extends SvelteComponent<ScanScanner2Props> {}
