import { SvelteComponent } from 'svelte';

export interface ScannerRefreshBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRefreshBox extends SvelteComponent<ScannerRefreshBoxProps> {}
