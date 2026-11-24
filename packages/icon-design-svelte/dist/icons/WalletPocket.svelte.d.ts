import { SvelteComponent } from 'svelte';

export interface WalletPocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WalletPocket extends SvelteComponent<WalletPocketProps> {}
