import { SvelteComponent } from 'svelte';

export interface BanknoteMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteMinus extends SvelteComponent<BanknoteMinusProps> {}
