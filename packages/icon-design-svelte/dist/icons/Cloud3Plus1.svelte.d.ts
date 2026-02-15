import { SvelteComponent } from 'svelte';

export interface Cloud3Plus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Plus1 extends SvelteComponent<Cloud3Plus1Props> {}
