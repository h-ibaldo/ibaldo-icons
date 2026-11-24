import { SvelteComponent } from 'svelte';

export interface LaptopStoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopStore extends SvelteComponent<LaptopStoreProps> {}
