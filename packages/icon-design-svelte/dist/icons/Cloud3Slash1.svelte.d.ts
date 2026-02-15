import { SvelteComponent } from 'svelte';

export interface Cloud3Slash1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Slash1 extends SvelteComponent<Cloud3Slash1Props> {}
