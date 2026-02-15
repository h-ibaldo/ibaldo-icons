import { SvelteComponent } from 'svelte';

export interface PuzzleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Puzzle extends SvelteComponent<PuzzleProps> {}
