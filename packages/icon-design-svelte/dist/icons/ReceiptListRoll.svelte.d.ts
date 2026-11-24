import { SvelteComponent } from 'svelte';

export interface ReceiptListRollProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptListRoll extends SvelteComponent<ReceiptListRollProps> {}
