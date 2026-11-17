import { SvelteComponent } from 'svelte';

export interface CloudTransferTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudTransferTall extends SvelteComponent<CloudTransferTallProps> {}
