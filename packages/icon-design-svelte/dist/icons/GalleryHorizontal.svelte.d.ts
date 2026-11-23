import { SvelteComponent } from 'svelte';

export interface GalleryHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GalleryHorizontal extends SvelteComponent<GalleryHorizontalProps> {}
