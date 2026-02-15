import { SvelteComponent } from 'svelte';

export interface Cloud3TransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Transfer extends SvelteComponent<Cloud3TransferProps> {}
