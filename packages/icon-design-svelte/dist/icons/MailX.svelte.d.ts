import { SvelteComponent } from 'svelte';

export interface MailXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MailX extends SvelteComponent<MailXProps> {}
