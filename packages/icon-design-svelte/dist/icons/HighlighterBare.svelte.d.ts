import { SvelteComponent } from 'svelte';

export interface HighlighterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HighlighterBare extends SvelteComponent<HighlighterBareProps> {}
