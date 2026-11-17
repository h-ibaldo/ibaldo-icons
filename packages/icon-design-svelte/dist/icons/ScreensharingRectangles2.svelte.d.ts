import { SvelteComponent } from 'svelte';

export interface ScreensharingRectangles2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingRectangles2 extends SvelteComponent<ScreensharingRectangles2Props> {}
