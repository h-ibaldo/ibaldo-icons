import { SvelteComponent } from 'svelte';

export interface HighlighterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Highlighter extends SvelteComponent<HighlighterProps> {}
