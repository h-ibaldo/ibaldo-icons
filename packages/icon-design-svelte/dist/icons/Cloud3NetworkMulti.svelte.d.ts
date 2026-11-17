import { SvelteComponent } from 'svelte';

export interface Cloud3NetworkMultiProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3NetworkMulti extends SvelteComponent<Cloud3NetworkMultiProps> {}
