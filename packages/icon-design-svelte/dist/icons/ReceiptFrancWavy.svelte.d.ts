import { SvelteComponent } from 'svelte';

export interface ReceiptFrancWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptFrancWavy extends SvelteComponent<ReceiptFrancWavyProps> {}
