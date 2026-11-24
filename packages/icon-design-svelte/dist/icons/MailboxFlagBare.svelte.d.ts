import { SvelteComponent } from 'svelte';

export interface MailboxFlagBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailboxFlagBare extends SvelteComponent<MailboxFlagBareProps> {}
