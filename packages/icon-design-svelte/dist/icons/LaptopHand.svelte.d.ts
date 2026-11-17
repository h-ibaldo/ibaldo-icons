import { SvelteComponent } from 'svelte';

export interface LaptopHandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopHand extends SvelteComponent<LaptopHandProps> {}
