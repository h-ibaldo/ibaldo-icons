import { SvelteComponent } from 'svelte';

export interface CoinStackSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CoinStackSearch extends SvelteComponent<CoinStackSearchProps> {}
