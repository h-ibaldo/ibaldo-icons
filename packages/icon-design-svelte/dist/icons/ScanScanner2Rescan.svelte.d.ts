import { SvelteComponent } from 'svelte';

export interface ScanScanner2RescanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner2Rescan extends SvelteComponent<ScanScanner2RescanProps> {}
