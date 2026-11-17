import { SvelteComponent } from 'svelte';

export interface ScreensharingComputersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreensharingComputers extends SvelteComponent<ScreensharingComputersProps> {}
