import { SvelteComponent } from 'svelte';

export interface BanknoteDollarCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarCheck extends SvelteComponent<BanknoteDollarCheckProps> {}
