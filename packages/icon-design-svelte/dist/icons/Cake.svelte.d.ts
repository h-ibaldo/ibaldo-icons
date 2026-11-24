import { SvelteComponent } from 'svelte';

export interface CakeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cake extends SvelteComponent<CakeProps> {}
