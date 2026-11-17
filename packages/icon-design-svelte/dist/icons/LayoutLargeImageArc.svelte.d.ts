import { SvelteComponent } from 'svelte';

export interface LayoutLargeImageArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutLargeImageArc extends SvelteComponent<LayoutLargeImageArcProps> {}
