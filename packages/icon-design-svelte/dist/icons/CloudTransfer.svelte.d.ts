import { SvelteComponent } from 'svelte';

export interface CloudTransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudTransfer extends SvelteComponent<CloudTransferProps> {}
