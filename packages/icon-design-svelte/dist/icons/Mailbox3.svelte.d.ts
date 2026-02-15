import { SvelteComponent } from 'svelte';

export interface Mailbox3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox3 extends SvelteComponent<Mailbox3Props> {}
