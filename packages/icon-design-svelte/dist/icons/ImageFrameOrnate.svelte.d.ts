import { SvelteComponent } from 'svelte';

export interface ImageFrameOrnateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageFrameOrnate extends SvelteComponent<ImageFrameOrnateProps> {}
