import { SvelteComponent } from 'svelte';

export interface BanknoteCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteCheck extends SvelteComponent<BanknoteCheckProps> {}
