import { SvelteComponent } from 'svelte';

export interface Cloud1ReceiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Receive extends SvelteComponent<Cloud1ReceiveProps> {}
