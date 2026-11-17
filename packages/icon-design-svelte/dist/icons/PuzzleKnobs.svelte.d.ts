import { SvelteComponent } from 'svelte';

export interface PuzzleKnobsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PuzzleKnobs extends SvelteComponent<PuzzleKnobsProps> {}
