import { SvelteComponent } from 'svelte';

export interface GalleryLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GalleryLeft extends SvelteComponent<GalleryLeftProps> {}
