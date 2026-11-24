import { SvelteComponent } from 'svelte';

export interface ScannerRefreshPaperProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRefreshPaper extends SvelteComponent<ScannerRefreshPaperProps> {}
