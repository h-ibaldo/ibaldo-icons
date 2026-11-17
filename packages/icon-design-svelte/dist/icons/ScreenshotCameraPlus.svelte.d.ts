import { SvelteComponent } from 'svelte';

export interface ScreenshotCameraPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotCameraPlus extends SvelteComponent<ScreenshotCameraPlusProps> {}
