import { SvelteComponent } from 'svelte';

export interface Cloud3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3X extends SvelteComponent<Cloud3XProps> {}
