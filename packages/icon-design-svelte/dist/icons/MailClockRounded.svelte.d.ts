import { SvelteComponent } from 'svelte';

export interface MailClockRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailClockRounded extends SvelteComponent<MailClockRoundedProps> {}
