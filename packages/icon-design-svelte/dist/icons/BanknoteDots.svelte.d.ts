import { SvelteComponent } from 'svelte';

export interface BanknoteDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDots extends SvelteComponent<BanknoteDotsProps> {}
