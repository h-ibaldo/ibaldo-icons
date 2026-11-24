import { SvelteComponent } from 'svelte';

export interface ScanSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanSquareStack extends SvelteComponent<ScanSquareStackProps> {}
