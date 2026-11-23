import { SvelteComponent } from 'svelte';

export interface GalleryThumbnailsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GalleryThumbnails extends SvelteComponent<GalleryThumbnailsProps> {}
