import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpRound extends SvelteComponent<PaperclipArrowUpRoundProps> {}
