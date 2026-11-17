import { SvelteComponent } from 'svelte';

export interface FullscreenTrianglesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FullscreenTriangles extends SvelteComponent<FullscreenTrianglesProps> {}
