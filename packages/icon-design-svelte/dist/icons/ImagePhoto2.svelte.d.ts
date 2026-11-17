import { SvelteComponent } from 'svelte';

export interface ImagePhoto2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePhoto2 extends SvelteComponent<ImagePhoto2Props> {}
