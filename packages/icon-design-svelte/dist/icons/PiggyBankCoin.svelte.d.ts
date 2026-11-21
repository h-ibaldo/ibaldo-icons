import { SvelteComponent } from 'svelte';

export interface PiggyBankCoinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PiggyBankCoin extends SvelteComponent<PiggyBankCoinProps> {}
