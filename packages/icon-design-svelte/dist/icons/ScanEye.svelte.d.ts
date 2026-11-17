import { SvelteComponent } from 'svelte';

export interface ScanEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanEye extends SvelteComponent<ScanEyeProps> {}
