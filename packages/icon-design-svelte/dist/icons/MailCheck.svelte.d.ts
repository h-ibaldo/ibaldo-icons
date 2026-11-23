import { SvelteComponent } from 'svelte';

export interface MailCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailCheck extends SvelteComponent<MailCheckProps> {}
