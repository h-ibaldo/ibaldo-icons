import { SvelteComponent } from 'svelte';

export interface MailLinkClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailLinkClip extends SvelteComponent<MailLinkClipProps> {}
