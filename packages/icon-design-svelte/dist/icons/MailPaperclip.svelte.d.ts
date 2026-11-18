import { SvelteComponent } from 'svelte';

export interface MailPaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailPaperclip extends SvelteComponent<MailPaperclipProps> {}
