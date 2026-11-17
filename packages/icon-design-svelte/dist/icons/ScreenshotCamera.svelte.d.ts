import { SvelteComponent } from 'svelte';

export interface ScreenshotCameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenshotCamera extends SvelteComponent<ScreenshotCameraProps> {}
