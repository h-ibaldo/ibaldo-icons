import { SvelteComponent } from 'svelte';

export interface ImagePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePlus extends SvelteComponent<ImagePlusProps> {}
