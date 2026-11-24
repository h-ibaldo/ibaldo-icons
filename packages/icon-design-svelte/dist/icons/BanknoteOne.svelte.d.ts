import { SvelteComponent } from 'svelte';

export interface BanknoteOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteOne extends SvelteComponent<BanknoteOneProps> {}
