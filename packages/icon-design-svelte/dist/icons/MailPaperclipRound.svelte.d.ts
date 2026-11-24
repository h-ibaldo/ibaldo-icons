import { SvelteComponent } from 'svelte';

export interface MailPaperclipRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailPaperclipRound extends SvelteComponent<MailPaperclipRoundProps> {}
