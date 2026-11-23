import { SvelteComponent } from 'svelte';

export interface BanknoteDollarArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarArrowUp extends SvelteComponent<BanknoteDollarArrowUpProps> {}
