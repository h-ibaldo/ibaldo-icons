import { SvelteComponent } from 'svelte';

export interface Cloud2ReceiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Receive extends SvelteComponent<Cloud2ReceiveProps> {}
