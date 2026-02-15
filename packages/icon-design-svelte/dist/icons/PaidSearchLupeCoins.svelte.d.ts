import { SvelteComponent } from 'svelte';

export interface PaidSearchLupeCoinsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaidSearchLupeCoins extends SvelteComponent<PaidSearchLupeCoinsProps> {}
