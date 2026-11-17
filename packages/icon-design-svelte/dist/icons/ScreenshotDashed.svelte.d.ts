import { SvelteComponent } from 'svelte';

export interface ScreenshotDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotDashed extends SvelteComponent<ScreenshotDashedProps> {}
