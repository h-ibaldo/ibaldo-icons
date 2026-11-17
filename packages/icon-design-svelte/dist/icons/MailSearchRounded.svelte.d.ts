import { SvelteComponent } from 'svelte';

export interface MailSearchRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailSearchRounded extends SvelteComponent<MailSearchRoundedProps> {}
