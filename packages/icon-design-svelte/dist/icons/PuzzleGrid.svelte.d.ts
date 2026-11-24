import { SvelteComponent } from 'svelte';

export interface PuzzleGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PuzzleGrid extends SvelteComponent<PuzzleGridProps> {}
