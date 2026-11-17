import { SvelteComponent } from 'svelte';

export interface MailSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailSearch extends SvelteComponent<MailSearchProps> {}
