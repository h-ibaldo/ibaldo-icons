import { SvelteComponent } from 'svelte';

export interface PictureInPictureTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PictureInPictureTop extends SvelteComponent<PictureInPictureTopProps> {}
