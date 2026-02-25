import { SvelteComponent } from 'svelte';

export interface Mailbox4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox4 extends SvelteComponent<Mailbox4Props> {}
