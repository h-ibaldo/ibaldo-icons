import { SvelteComponent } from 'svelte';

export interface ImagePeaksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePeaks extends SvelteComponent<ImagePeaksProps> {}
