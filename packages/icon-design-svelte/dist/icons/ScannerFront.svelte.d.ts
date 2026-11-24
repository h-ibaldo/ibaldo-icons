import { SvelteComponent } from 'svelte';

export interface ScannerFrontProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerFront extends SvelteComponent<ScannerFrontProps> {}
