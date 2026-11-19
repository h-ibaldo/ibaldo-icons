import { SvelteComponent } from 'svelte';

export interface ScanGlobeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanGlobe extends SvelteComponent<ScanGlobeProps> {}
