import { SvelteComponent } from 'svelte';

export interface GalleryVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GalleryVertical extends SvelteComponent<GalleryVerticalProps> {}
