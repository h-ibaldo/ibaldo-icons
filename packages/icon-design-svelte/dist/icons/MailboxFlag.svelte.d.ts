import { SvelteComponent } from 'svelte';

export interface MailboxFlagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailboxFlag extends SvelteComponent<MailboxFlagProps> {}
