import { SvelteComponent } from 'svelte';

export interface Cloud3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Check extends SvelteComponent<Cloud3CheckProps> {}
