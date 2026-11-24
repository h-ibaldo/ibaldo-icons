import { SvelteComponent } from 'svelte';

export interface BanknoteArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteArrowDown extends SvelteComponent<BanknoteArrowDownProps> {}
