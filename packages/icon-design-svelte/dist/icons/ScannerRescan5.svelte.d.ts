import { SvelteComponent } from 'svelte';

export interface ScannerRescan5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRescan5 extends SvelteComponent<ScannerRescan5Props> {}
