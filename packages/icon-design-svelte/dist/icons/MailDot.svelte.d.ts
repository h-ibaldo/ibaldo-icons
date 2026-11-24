import { SvelteComponent } from 'svelte';

export interface MailDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailDot extends SvelteComponent<MailDotProps> {}
