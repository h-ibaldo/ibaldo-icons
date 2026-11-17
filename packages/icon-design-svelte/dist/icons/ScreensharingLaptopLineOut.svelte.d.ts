import { SvelteComponent } from 'svelte';

export interface ScreensharingLaptopLineOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingLaptopLineOut extends SvelteComponent<ScreensharingLaptopLineOutProps> {}
