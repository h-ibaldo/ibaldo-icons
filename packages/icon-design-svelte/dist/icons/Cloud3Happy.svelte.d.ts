import { SvelteComponent } from 'svelte';

export interface Cloud3HappyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Happy extends SvelteComponent<Cloud3HappyProps> {}
