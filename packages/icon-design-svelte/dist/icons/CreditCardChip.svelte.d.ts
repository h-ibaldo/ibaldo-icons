import { SvelteComponent } from 'svelte';

export interface CreditCardChipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardChip extends SvelteComponent<CreditCardChipProps> {}
