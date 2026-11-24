import { SvelteComponent } from 'svelte';

export interface ScreenshotPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotPlus extends SvelteComponent<ScreenshotPlusProps> {}
