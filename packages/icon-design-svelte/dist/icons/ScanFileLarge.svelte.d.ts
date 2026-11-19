import { SvelteComponent } from 'svelte';

export interface ScanFileLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFileLarge extends SvelteComponent<ScanFileLargeProps> {}
