import { SvelteComponent } from 'svelte';

export interface PaintbrushVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintbrushVertical extends SvelteComponent<PaintbrushVerticalProps> {}
