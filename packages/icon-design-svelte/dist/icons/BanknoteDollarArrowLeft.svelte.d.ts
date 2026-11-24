import { SvelteComponent } from 'svelte';

export interface BanknoteDollarArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarArrowLeft extends SvelteComponent<BanknoteDollarArrowLeftProps> {}
