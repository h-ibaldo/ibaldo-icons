import { SvelteComponent } from 'svelte';

export interface ScanFaceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFace extends SvelteComponent<ScanFaceProps> {}
