import { SvelteComponent } from 'svelte';

export interface ImagePicturePhoto2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePicturePhoto2 extends SvelteComponent<ImagePicturePhoto2Props> {}
