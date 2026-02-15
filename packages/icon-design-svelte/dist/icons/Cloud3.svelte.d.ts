import { SvelteComponent } from 'svelte';

export interface Cloud3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3 extends SvelteComponent<Cloud3Props> {}
