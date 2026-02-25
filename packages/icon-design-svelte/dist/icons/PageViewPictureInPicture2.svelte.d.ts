import { SvelteComponent } from 'svelte';

export interface PageViewPictureInPicture2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewPictureInPicture2 extends SvelteComponent<PageViewPictureInPicture2Props> {}
