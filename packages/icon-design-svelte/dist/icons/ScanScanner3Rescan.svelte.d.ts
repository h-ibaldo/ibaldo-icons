import { SvelteComponent } from 'svelte';

export interface ScanScanner3RescanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner3Rescan extends SvelteComponent<ScanScanner3RescanProps> {}
