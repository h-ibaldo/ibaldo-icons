import { SvelteComponent } from 'svelte';

export interface Cloud1BoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Box extends SvelteComponent<Cloud1BoxProps> {}
