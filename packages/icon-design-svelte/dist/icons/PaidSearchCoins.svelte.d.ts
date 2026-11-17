import { SvelteComponent } from 'svelte';

export interface PaidSearchCoinsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaidSearchCoins extends SvelteComponent<PaidSearchCoinsProps> {}
