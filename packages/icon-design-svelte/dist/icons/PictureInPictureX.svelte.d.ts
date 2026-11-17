import { SvelteComponent } from 'svelte';

export interface PictureInPictureXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PictureInPictureX extends SvelteComponent<PictureInPictureXProps> {}
