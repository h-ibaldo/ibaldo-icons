import { SvelteComponent } from 'svelte';

export interface Puzzle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Puzzle3 extends SvelteComponent<Puzzle3Props> {}
