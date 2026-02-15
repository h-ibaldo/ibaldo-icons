import { SvelteComponent } from 'svelte';

export interface ScanScanner4RescanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner4Rescan extends SvelteComponent<ScanScanner4RescanProps> {}
