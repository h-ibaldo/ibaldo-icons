import { SvelteComponent } from 'svelte';

export interface ScreensharingLaptopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingLaptop extends SvelteComponent<ScreensharingLaptopProps> {}
