import { SvelteComponent } from 'svelte';

export interface MailLinkBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailLinkBracket extends SvelteComponent<MailLinkBracketProps> {}
