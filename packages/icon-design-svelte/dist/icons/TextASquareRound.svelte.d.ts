import { SvelteComponent } from 'svelte';

export interface TextASquareRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextASquareRound extends SvelteComponent<TextASquareRoundProps> {}
