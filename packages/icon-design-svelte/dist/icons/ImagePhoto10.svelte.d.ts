import { SvelteComponent } from 'svelte';

export interface ImagePhoto10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePhoto10 extends SvelteComponent<ImagePhoto10Props> {}
