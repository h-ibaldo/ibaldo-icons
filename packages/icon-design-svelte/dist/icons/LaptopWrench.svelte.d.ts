import { SvelteComponent } from 'svelte';

export interface LaptopWrenchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopWrench extends SvelteComponent<LaptopWrenchProps> {}
