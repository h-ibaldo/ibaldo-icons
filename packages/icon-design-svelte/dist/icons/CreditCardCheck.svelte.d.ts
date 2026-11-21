import { SvelteComponent } from 'svelte';

export interface CreditCardCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CreditCardCheck extends SvelteComponent<CreditCardCheckProps> {}
