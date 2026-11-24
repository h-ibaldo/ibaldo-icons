import { SvelteComponent } from 'svelte';

export interface WalletCardsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WalletCards extends SvelteComponent<WalletCardsProps> {}
