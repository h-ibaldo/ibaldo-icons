import { SvelteComponent } from 'svelte';

export interface ScannerPaperProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerPaper extends SvelteComponent<ScannerPaperProps> {}
