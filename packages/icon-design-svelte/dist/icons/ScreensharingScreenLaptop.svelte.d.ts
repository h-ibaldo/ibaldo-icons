import { SvelteComponent } from 'svelte';

export interface ScreensharingScreenLaptopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingScreenLaptop extends SvelteComponent<ScreensharingScreenLaptopProps> {}
