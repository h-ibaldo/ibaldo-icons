import { SvelteComponent } from 'svelte';

export interface ReceiptListWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptListWavy extends SvelteComponent<ReceiptListWavyProps> {}
