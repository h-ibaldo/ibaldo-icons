import { SvelteComponent } from 'svelte';

export interface BanknoteArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteArrowUp extends SvelteComponent<BanknoteArrowUpProps> {}
