import { SvelteComponent } from 'svelte';

export interface ScanWindowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanWindow extends SvelteComponent<ScanWindowProps> {}
