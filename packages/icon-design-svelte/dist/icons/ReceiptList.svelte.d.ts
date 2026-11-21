import { SvelteComponent } from 'svelte';

export interface ReceiptListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReceiptList extends SvelteComponent<ReceiptListProps> {}
