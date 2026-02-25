import { SvelteComponent } from 'svelte';

export interface Cloud1Minus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Minus2 extends SvelteComponent<Cloud1Minus2Props> {}
