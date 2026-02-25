import { SvelteComponent } from 'svelte';

export interface Cloud3X1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3X1 extends SvelteComponent<Cloud3X1Props> {}
