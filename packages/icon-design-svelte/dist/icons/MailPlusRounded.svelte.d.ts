import { SvelteComponent } from 'svelte';

export interface MailPlusRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailPlusRounded extends SvelteComponent<MailPlusRoundedProps> {}
