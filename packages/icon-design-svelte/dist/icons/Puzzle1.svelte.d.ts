import { SvelteComponent } from 'svelte';

export interface Puzzle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Puzzle1 extends SvelteComponent<Puzzle1Props> {}
