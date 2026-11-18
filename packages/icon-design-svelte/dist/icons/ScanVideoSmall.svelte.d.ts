import { SvelteComponent } from 'svelte';

export interface ScanVideoSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanVideoSmall extends SvelteComponent<ScanVideoSmallProps> {}
