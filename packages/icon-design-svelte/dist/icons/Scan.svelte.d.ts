import { SvelteComponent } from 'svelte';

export interface ScanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scan extends SvelteComponent<ScanProps> {}
