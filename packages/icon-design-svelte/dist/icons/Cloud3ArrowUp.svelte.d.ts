import { SvelteComponent } from 'svelte';

export interface Cloud3ArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3ArrowUp extends SvelteComponent<Cloud3ArrowUpProps> {}
