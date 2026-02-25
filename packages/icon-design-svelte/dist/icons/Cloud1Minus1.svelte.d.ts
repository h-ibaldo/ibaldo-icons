import { SvelteComponent } from 'svelte';

export interface Cloud1Minus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Minus1 extends SvelteComponent<Cloud1Minus1Props> {}
