import { SvelteComponent } from 'svelte';

export interface LaptopBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopBag extends SvelteComponent<LaptopBagProps> {}
