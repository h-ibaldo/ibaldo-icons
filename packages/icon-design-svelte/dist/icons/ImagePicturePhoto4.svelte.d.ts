import { SvelteComponent } from 'svelte';

export interface ImagePicturePhoto4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePicturePhoto4 extends SvelteComponent<ImagePicturePhoto4Props> {}
