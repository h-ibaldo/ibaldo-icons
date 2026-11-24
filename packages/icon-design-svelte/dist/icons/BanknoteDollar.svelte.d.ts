import { SvelteComponent } from 'svelte';

export interface BanknoteDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollar extends SvelteComponent<BanknoteDollarProps> {}
