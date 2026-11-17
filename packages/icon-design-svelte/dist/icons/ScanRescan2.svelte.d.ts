import { SvelteComponent } from 'svelte';

export interface ScanRescan2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanRescan2 extends SvelteComponent<ScanRescan2Props> {}
