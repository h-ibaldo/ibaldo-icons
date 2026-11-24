import { SvelteComponent } from 'svelte';

export interface ImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image extends SvelteComponent<ImageProps> {}
