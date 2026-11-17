import { SvelteComponent } from 'svelte';

export interface ScreensharingLaptopErrorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingLaptopError extends SvelteComponent<ScreensharingLaptopErrorProps> {}
