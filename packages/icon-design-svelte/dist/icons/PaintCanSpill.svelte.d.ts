import { SvelteComponent } from 'svelte';

export interface PaintCanSpillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintCanSpill extends SvelteComponent<PaintCanSpillProps> {}
