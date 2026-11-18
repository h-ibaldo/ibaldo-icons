import { SvelteComponent } from 'svelte';

export interface ScanVideoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanVideo extends SvelteComponent<ScanVideoProps> {}
