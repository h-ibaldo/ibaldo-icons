import { SvelteComponent } from 'svelte';

export interface BrushThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrushThick extends SvelteComponent<BrushThickProps> {}
