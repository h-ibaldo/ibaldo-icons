import { SvelteComponent } from 'svelte';

export interface ReceiptDollarDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptDollarDotted extends SvelteComponent<ReceiptDollarDottedProps> {}
