import { SvelteComponent } from 'svelte';

export interface BanknoteTenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteTen extends SvelteComponent<BanknoteTenProps> {}
