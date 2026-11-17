import { SvelteComponent } from 'svelte';

export interface ScreenShareLaptopXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareLaptopX extends SvelteComponent<ScreenShareLaptopXProps> {}
