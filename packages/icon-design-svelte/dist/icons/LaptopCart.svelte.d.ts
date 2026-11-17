import { SvelteComponent } from 'svelte';

export interface LaptopCartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopCart extends SvelteComponent<LaptopCartProps> {}
