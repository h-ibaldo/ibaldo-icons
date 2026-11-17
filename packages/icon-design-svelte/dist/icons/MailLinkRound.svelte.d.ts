import { SvelteComponent } from 'svelte';

export interface MailLinkRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailLinkRound extends SvelteComponent<MailLinkRoundProps> {}
