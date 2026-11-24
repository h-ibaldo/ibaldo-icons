import { SvelteComponent } from 'svelte';

export interface TrendUpDownSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrendUpDownSmall extends SvelteComponent<TrendUpDownSmallProps> {}
