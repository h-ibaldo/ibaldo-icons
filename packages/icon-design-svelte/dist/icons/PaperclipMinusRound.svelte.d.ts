import { SvelteComponent } from 'svelte';

export interface PaperclipMinusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusRound extends SvelteComponent<PaperclipMinusRoundProps> {}
