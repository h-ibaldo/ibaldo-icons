import { SvelteComponent } from 'svelte';

export interface ScanScanner5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner5 extends SvelteComponent<ScanScanner5Props> {}
