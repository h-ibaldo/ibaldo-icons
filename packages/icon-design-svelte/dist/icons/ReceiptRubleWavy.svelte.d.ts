import { SvelteComponent } from 'svelte';

export interface ReceiptRubleWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptRubleWavy extends SvelteComponent<ReceiptRubleWavyProps> {}
