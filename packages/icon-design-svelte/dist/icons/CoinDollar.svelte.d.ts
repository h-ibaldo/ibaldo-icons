import { SvelteComponent } from 'svelte';

export interface CoinDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CoinDollar extends SvelteComponent<CoinDollarProps> {}
