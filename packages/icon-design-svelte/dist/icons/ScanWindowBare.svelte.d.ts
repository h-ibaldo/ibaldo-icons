import { SvelteComponent } from 'svelte';

export interface ScanWindowBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanWindowBare extends SvelteComponent<ScanWindowBareProps> {}
