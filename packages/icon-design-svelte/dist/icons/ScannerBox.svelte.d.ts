import { SvelteComponent } from 'svelte';

export interface ScannerBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScannerBox extends SvelteComponent<ScannerBoxProps> {}
