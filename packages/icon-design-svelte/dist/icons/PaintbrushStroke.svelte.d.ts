import { SvelteComponent } from 'svelte';

export interface PaintbrushStrokeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintbrushStroke extends SvelteComponent<PaintbrushStrokeProps> {}
