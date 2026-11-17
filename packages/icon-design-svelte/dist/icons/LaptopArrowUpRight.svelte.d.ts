import { SvelteComponent } from 'svelte';

export interface LaptopArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopArrowUpRight extends SvelteComponent<LaptopArrowUpRightProps> {}
