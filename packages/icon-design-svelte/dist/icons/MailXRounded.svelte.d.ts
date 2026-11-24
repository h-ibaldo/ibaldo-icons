import { SvelteComponent } from 'svelte';

export interface MailXRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailXRounded extends SvelteComponent<MailXRoundedProps> {}
