import { SvelteComponent } from 'svelte';

export interface LaptopCartFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopCartFlat extends SvelteComponent<LaptopCartFlatProps> {}
