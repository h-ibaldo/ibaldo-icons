import { SvelteComponent } from 'svelte';

export interface MailMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailMinus extends SvelteComponent<MailMinusProps> {}
