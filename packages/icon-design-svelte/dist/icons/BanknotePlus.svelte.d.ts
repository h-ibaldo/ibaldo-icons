import { SvelteComponent } from 'svelte';

export interface BanknotePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknotePlus extends SvelteComponent<BanknotePlusProps> {}
