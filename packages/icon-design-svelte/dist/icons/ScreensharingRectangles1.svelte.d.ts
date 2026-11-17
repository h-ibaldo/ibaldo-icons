import { SvelteComponent } from 'svelte';

export interface ScreensharingRectangles1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingRectangles1 extends SvelteComponent<ScreensharingRectangles1Props> {}
