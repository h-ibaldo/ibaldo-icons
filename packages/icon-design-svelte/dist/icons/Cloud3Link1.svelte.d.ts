import { SvelteComponent } from 'svelte';

export interface Cloud3Link1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Link1 extends SvelteComponent<Cloud3Link1Props> {}
