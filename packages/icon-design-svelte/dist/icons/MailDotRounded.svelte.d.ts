import { SvelteComponent } from 'svelte';

export interface MailDotRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailDotRounded extends SvelteComponent<MailDotRoundedProps> {}
