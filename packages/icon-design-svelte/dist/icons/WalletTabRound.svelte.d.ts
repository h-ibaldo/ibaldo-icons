import { SvelteComponent } from 'svelte';

export interface WalletTabRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WalletTabRound extends SvelteComponent<WalletTabRoundProps> {}
