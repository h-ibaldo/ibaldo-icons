import { SvelteComponent } from 'svelte';

export interface MailClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailClock extends SvelteComponent<MailClockProps> {}
