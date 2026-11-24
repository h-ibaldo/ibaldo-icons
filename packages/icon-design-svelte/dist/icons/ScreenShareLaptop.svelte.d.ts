import { SvelteComponent } from 'svelte';

export interface ScreenShareLaptopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareLaptop extends SvelteComponent<ScreenShareLaptopProps> {}
