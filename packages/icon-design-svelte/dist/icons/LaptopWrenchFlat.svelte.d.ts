import { SvelteComponent } from 'svelte';

export interface LaptopWrenchFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopWrenchFlat extends SvelteComponent<LaptopWrenchFlatProps> {}
