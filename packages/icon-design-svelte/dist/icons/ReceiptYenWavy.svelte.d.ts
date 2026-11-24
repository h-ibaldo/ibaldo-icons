import { SvelteComponent } from 'svelte';

export interface ReceiptYenWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptYenWavy extends SvelteComponent<ReceiptYenWavyProps> {}
