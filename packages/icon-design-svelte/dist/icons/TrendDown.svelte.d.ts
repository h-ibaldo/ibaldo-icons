import { SvelteComponent } from 'svelte';

export interface TrendDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrendDown extends SvelteComponent<TrendDownProps> {}
