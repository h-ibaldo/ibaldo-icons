import { SvelteComponent } from 'svelte';

export interface MinusCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusCircle2 extends SvelteComponent<MinusCircle2Props> {}
