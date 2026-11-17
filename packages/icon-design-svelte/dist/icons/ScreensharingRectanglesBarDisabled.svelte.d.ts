import { SvelteComponent } from 'svelte';

export interface ScreensharingRectanglesBarDisabledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingRectanglesBarDisabled extends SvelteComponent<ScreensharingRectanglesBarDisabledProps> {}
