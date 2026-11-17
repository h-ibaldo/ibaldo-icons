import { SvelteComponent } from 'svelte';

export interface ImagePhoto1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePhoto1 extends SvelteComponent<ImagePhoto1Props> {}
