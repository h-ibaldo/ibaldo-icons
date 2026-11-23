import { SvelteComponent } from 'svelte';

export interface BanknoteDollarPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarPlus extends SvelteComponent<BanknoteDollarPlusProps> {}
