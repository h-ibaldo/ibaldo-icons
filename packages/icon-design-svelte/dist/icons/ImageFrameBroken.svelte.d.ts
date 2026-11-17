import { SvelteComponent } from 'svelte';

export interface ImageFrameBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageFrameBroken extends SvelteComponent<ImageFrameBrokenProps> {}
