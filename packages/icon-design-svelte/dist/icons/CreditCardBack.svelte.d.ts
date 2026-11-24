import { SvelteComponent } from 'svelte';

export interface CreditCardBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardBack extends SvelteComponent<CreditCardBackProps> {}
