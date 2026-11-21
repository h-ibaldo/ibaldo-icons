import { SvelteComponent } from 'svelte';

export interface CreditCardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCard extends SvelteComponent<CreditCardProps> {}
