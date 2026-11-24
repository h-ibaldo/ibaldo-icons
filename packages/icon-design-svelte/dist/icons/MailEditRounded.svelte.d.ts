import { SvelteComponent } from 'svelte';

export interface MailEditRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailEditRounded extends SvelteComponent<MailEditRoundedProps> {}
