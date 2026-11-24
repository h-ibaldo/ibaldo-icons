import { SvelteComponent } from 'svelte';

export interface ImageMountainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageMountain extends SvelteComponent<ImageMountainProps> {}
