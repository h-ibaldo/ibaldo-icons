import { SvelteComponent } from 'svelte';

export interface MailboxPostProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailboxPost extends SvelteComponent<MailboxPostProps> {}
