import { SvelteComponent } from 'svelte';

export interface ReceiptLiraWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptLiraWavy extends SvelteComponent<ReceiptLiraWavyProps> {}
