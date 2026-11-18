import { SvelteComponent } from 'svelte';

export interface ScanFileBeamProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFileBeam extends SvelteComponent<ScanFileBeamProps> {}
