import { SvelteComponent } from 'svelte';

export interface ScanRescan1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanRescan1 extends SvelteComponent<ScanRescan1Props> {}
