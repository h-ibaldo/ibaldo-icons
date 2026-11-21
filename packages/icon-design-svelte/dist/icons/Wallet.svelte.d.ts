import { SvelteComponent } from 'svelte';

export interface WalletProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Wallet extends SvelteComponent<WalletProps> {}
