import { SvelteComponent } from 'svelte';

export interface PuzzleNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PuzzleNotched extends SvelteComponent<PuzzleNotchedProps> {}
