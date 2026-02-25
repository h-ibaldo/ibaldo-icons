import { SvelteComponent } from 'svelte';

export interface Cloud3Minus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Minus1 extends SvelteComponent<Cloud3Minus1Props> {}
