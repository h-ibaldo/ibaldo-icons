import { SvelteComponent } from 'svelte';

export interface PaperclipPlusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusRound extends SvelteComponent<PaperclipPlusRoundProps> {}
