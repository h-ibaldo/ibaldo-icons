import { SvelteComponent } from 'svelte';

export interface Cloud3Slash2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Slash2 extends SvelteComponent<Cloud3Slash2Props> {}
