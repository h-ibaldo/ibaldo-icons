import { SvelteComponent } from 'svelte';

export interface ScanFaceRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFaceRound extends SvelteComponent<ScanFaceRoundProps> {}
