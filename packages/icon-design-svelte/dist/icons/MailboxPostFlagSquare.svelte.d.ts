import { SvelteComponent } from 'svelte';

export interface MailboxPostFlagSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailboxPostFlagSquare extends SvelteComponent<MailboxPostFlagSquareProps> {}
