import { SvelteComponent } from 'svelte';

export interface ScanScanner1RescanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner1Rescan extends SvelteComponent<ScanScanner1RescanProps> {}
