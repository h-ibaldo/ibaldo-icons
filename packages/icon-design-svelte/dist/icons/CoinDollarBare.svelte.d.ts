import { SvelteComponent } from 'svelte';

export interface CoinDollarBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CoinDollarBare extends SvelteComponent<CoinDollarBareProps> {}
