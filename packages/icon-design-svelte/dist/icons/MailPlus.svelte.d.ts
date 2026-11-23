import { SvelteComponent } from 'svelte';

export interface MailPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailPlus extends SvelteComponent<MailPlusProps> {}
