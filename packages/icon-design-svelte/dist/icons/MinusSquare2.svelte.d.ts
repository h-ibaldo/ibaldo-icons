import { SvelteComponent } from 'svelte';

export interface MinusSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquare2 extends SvelteComponent<MinusSquare2Props> {}
