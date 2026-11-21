import { SvelteComponent } from 'svelte';

export interface CreditCardDashesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardDashes extends SvelteComponent<CreditCardDashesProps> {}
