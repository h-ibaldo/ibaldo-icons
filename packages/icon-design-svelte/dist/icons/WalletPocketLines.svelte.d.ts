import { SvelteComponent } from 'svelte';

export interface WalletPocketLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WalletPocketLines extends SvelteComponent<WalletPocketLinesProps> {}
