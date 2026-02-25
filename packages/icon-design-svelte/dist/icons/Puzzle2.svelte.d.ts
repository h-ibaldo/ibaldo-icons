import { SvelteComponent } from 'svelte';

export interface Puzzle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Puzzle2 extends SvelteComponent<Puzzle2Props> {}
