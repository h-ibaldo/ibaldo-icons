import { SvelteComponent } from 'svelte';

export interface Mailbox8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox8 extends SvelteComponent<Mailbox8Props> {}
