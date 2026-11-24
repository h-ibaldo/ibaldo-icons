import { SvelteComponent } from 'svelte';

export interface MailCheckRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailCheckRounded extends SvelteComponent<MailCheckRoundedProps> {}
