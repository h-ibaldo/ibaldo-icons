import { SvelteComponent } from 'svelte';

export interface GalleryTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GalleryTop extends SvelteComponent<GalleryTopProps> {}
