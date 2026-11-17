import { SvelteComponent } from 'svelte';

export interface ImagePhoto11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePhoto11 extends SvelteComponent<ImagePhoto11Props> {}
