import { SvelteComponent } from 'svelte';

export interface ReceiptRupeeWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptRupeeWavy extends SvelteComponent<ReceiptRupeeWavyProps> {}
