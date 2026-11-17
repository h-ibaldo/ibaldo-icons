import { SvelteComponent } from 'svelte';

export interface ScreenshotCamera2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotCamera2 extends SvelteComponent<ScreenshotCamera2Props> {}
