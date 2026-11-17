import { SvelteComponent } from 'svelte';

export interface PaperclipCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckRound extends SvelteComponent<PaperclipCheckRoundProps> {}
