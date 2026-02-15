import { SvelteComponent } from 'svelte';

export interface Cloud2ArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2ArrowUp extends SvelteComponent<Cloud2ArrowUpProps> {}
