import { SvelteComponent } from 'svelte';

export interface ScanBeamProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanBeam extends SvelteComponent<ScanBeamProps> {}
