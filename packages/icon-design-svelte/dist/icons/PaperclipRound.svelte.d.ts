import { SvelteComponent } from 'svelte';

export interface PaperclipRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipRound extends SvelteComponent<PaperclipRoundProps> {}
