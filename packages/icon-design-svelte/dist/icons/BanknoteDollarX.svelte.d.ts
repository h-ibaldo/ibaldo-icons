import { SvelteComponent } from 'svelte';

export interface BanknoteDollarXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteDollarX extends SvelteComponent<BanknoteDollarXProps> {}
