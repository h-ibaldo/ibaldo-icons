import { SvelteComponent } from 'svelte';

export interface LaptopStoreFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopStoreFlat extends SvelteComponent<LaptopStoreFlatProps> {}
