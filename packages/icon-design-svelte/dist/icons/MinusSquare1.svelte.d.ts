import { SvelteComponent } from 'svelte';

export interface MinusSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquare1 extends SvelteComponent<MinusSquare1Props> {}
