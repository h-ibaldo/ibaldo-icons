import { SvelteComponent } from 'svelte';

export interface PaintbrushVerticalDippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintbrushVerticalDipped extends SvelteComponent<PaintbrushVerticalDippedProps> {}
