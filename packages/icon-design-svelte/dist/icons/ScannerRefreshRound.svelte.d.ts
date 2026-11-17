import { SvelteComponent } from 'svelte';

export interface ScannerRefreshRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRefreshRound extends SvelteComponent<ScannerRefreshRoundProps> {}
