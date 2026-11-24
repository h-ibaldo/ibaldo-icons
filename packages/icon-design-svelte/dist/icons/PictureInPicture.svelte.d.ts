import { SvelteComponent } from 'svelte';

export interface PictureInPictureProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PictureInPicture extends SvelteComponent<PictureInPictureProps> {}
