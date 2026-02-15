import { SvelteComponent } from 'svelte';

export interface Cloud3Network2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Network2 extends SvelteComponent<Cloud3Network2Props> {}
