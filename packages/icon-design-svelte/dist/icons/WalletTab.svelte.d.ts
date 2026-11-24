import { SvelteComponent } from 'svelte';

export interface WalletTabProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WalletTab extends SvelteComponent<WalletTabProps> {}
