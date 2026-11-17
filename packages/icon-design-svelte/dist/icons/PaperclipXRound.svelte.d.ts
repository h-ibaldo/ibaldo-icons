import { SvelteComponent } from 'svelte';

export interface PaperclipXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXRound extends SvelteComponent<PaperclipXRoundProps> {}
