import { SvelteComponent } from 'svelte';

export interface TrendDownSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrendDownSmall extends SvelteComponent<TrendDownSmallProps> {}
