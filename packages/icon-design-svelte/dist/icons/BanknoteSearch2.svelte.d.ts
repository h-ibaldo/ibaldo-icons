import { SvelteComponent } from 'svelte';

export interface BanknoteSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteSearch2 extends SvelteComponent<BanknoteSearch2Props> {}
