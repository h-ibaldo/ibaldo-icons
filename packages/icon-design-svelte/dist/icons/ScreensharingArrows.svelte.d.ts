import { SvelteComponent } from 'svelte';

export interface ScreensharingArrowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingArrows extends SvelteComponent<ScreensharingArrowsProps> {}
