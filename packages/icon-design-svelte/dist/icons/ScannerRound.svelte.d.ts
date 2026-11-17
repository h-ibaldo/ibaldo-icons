import { SvelteComponent } from 'svelte';

export interface ScannerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerRound extends SvelteComponent<ScannerRoundProps> {}
