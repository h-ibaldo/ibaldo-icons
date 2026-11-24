import { SvelteComponent } from 'svelte';

export interface MailEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailEdit extends SvelteComponent<MailEditProps> {}
