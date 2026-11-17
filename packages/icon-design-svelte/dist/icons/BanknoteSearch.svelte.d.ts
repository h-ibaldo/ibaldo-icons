import { SvelteComponent } from 'svelte';

export interface BanknoteSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteSearch extends SvelteComponent<BanknoteSearchProps> {}
