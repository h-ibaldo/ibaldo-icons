import { SvelteComponent } from 'svelte';

export interface ScanScanner5RescanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner5Rescan extends SvelteComponent<ScanScanner5RescanProps> {}
