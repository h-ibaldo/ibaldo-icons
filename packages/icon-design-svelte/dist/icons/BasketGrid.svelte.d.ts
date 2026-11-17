import { SvelteComponent } from 'svelte';

export interface BasketGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BasketGrid extends SvelteComponent<BasketGridProps> {}
