import { SvelteComponent } from 'svelte';

export interface ImageCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageCorners extends SvelteComponent<ImageCornersProps> {}
