import { SvelteComponent } from 'svelte';

export interface Cloud3Minus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Minus2 extends SvelteComponent<Cloud3Minus2Props> {}
