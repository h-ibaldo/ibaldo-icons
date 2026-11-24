import { SvelteComponent } from 'svelte';

export interface CreditCardChipDetailedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardChipDetailed extends SvelteComponent<CreditCardChipDetailedProps> {}
