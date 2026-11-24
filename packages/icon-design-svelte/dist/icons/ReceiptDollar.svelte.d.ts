import { SvelteComponent } from 'svelte';

export interface ReceiptDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptDollar extends SvelteComponent<ReceiptDollarProps> {}
