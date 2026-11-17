import { SvelteComponent } from 'svelte';

export interface PuzzleGridMissingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PuzzleGridMissing extends SvelteComponent<PuzzleGridMissingProps> {}
