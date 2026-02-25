import { SvelteComponent } from 'svelte';

export interface Puzzle4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Puzzle4 extends SvelteComponent<Puzzle4Props> {}
