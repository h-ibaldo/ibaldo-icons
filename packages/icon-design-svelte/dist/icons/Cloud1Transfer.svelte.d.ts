import { SvelteComponent } from 'svelte';

export interface Cloud1TransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Transfer extends SvelteComponent<Cloud1TransferProps> {}
