import { SvelteComponent } from 'svelte';

export interface TrendUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrendUp extends SvelteComponent<TrendUpProps> {}
