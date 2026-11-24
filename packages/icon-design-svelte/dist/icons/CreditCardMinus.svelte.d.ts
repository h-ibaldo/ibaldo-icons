import { SvelteComponent } from 'svelte';

export interface CreditCardMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardMinus extends SvelteComponent<CreditCardMinusProps> {}
