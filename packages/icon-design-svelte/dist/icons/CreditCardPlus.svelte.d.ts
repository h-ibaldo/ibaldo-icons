import { SvelteComponent } from 'svelte';

export interface CreditCardPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardPlus extends SvelteComponent<CreditCardPlusProps> {}
