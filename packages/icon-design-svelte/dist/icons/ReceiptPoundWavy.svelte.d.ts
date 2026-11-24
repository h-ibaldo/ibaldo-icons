import { SvelteComponent } from 'svelte';

export interface ReceiptPoundWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptPoundWavy extends SvelteComponent<ReceiptPoundWavyProps> {}
