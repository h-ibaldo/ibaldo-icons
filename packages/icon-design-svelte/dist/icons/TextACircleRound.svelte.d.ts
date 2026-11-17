import { SvelteComponent } from 'svelte';

export interface TextACircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextACircleRound extends SvelteComponent<TextACircleRoundProps> {}
