import { SvelteComponent } from 'svelte';

export interface BrushProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Brush extends SvelteComponent<BrushProps> {}
