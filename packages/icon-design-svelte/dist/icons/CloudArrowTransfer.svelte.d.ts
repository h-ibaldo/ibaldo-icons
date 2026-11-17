import { SvelteComponent } from 'svelte';

export interface CloudArrowTransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowTransfer extends SvelteComponent<CloudArrowTransferProps> {}
