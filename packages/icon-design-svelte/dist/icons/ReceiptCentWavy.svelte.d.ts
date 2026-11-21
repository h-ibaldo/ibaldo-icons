import { SvelteComponent } from 'svelte';

export interface ReceiptCentWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptCentWavy extends SvelteComponent<ReceiptCentWavyProps> {}
