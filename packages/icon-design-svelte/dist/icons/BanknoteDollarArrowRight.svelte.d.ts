import { SvelteComponent } from 'svelte';

export interface BanknoteDollarArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarArrowRight extends SvelteComponent<BanknoteDollarArrowRightProps> {}
