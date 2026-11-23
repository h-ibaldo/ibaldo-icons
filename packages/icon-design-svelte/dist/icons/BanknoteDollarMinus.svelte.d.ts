import { SvelteComponent } from 'svelte';

export interface BanknoteDollarMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarMinus extends SvelteComponent<BanknoteDollarMinusProps> {}
