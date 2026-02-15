import { SvelteComponent } from 'svelte';

export interface ScanScanner4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanScanner4 extends SvelteComponent<ScanScanner4Props> {}
