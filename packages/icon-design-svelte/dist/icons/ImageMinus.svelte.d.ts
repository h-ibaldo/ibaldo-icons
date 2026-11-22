import { SvelteComponent } from 'svelte';

export interface ImageMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageMinus extends SvelteComponent<ImageMinusProps> {}
