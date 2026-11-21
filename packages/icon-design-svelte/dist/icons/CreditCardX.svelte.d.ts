import { SvelteComponent } from 'svelte';

export interface CreditCardXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardX extends SvelteComponent<CreditCardXProps> {}
