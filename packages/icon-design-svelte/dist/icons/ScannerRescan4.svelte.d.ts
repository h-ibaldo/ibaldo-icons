import { SvelteComponent } from 'svelte';

export interface ScannerRescan4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRescan4 extends SvelteComponent<ScannerRescan4Props> {}
