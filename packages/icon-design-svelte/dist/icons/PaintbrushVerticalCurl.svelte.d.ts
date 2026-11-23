import { SvelteComponent } from 'svelte';

export interface PaintbrushVerticalCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintbrushVerticalCurl extends SvelteComponent<PaintbrushVerticalCurlProps> {}
