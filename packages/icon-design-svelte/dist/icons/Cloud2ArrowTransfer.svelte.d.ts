import { SvelteComponent } from 'svelte';

export interface Cloud2ArrowTransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2ArrowTransfer extends SvelteComponent<Cloud2ArrowTransferProps> {}
