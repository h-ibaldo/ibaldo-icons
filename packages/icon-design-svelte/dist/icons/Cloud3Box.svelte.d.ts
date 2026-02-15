import { SvelteComponent } from 'svelte';

export interface Cloud3BoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Box extends SvelteComponent<Cloud3BoxProps> {}
