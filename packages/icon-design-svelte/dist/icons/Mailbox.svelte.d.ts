import { SvelteComponent } from 'svelte';

export interface MailboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox extends SvelteComponent<MailboxProps> {}
