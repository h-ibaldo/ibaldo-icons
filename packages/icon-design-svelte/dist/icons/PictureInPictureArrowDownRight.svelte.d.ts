import { SvelteComponent } from 'svelte';

export interface PictureInPictureArrowDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PictureInPictureArrowDownRight extends SvelteComponent<PictureInPictureArrowDownRightProps> {}
