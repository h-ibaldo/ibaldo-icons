import { SvelteComponent } from 'svelte';

export interface WindowControlFullScreenTrianglesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlFullScreenTriangles extends SvelteComponent<WindowControlFullScreenTrianglesProps> {}
