import { SvelteComponent } from 'svelte';

export interface CoinStackDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CoinStackDouble extends SvelteComponent<CoinStackDoubleProps> {}
