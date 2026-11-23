import { SvelteComponent } from 'svelte';

export interface BanknoteDollarArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarArrowDown extends SvelteComponent<BanknoteDollarArrowDownProps> {}
