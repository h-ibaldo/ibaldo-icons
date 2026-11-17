import { SvelteComponent } from 'svelte';

export interface ScanRescan3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanRescan3 extends SvelteComponent<ScanRescan3Props> {}
