import { SvelteComponent } from 'svelte';

export interface ScreenshotAreaPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotAreaPlus extends SvelteComponent<ScreenshotAreaPlusProps> {}
