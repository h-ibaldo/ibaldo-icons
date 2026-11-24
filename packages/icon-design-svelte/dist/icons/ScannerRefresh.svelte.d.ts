import { SvelteComponent } from 'svelte';

export interface ScannerRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRefresh extends SvelteComponent<ScannerRefreshProps> {}
