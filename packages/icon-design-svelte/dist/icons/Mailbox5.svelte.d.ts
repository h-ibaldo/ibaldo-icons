import { SvelteComponent } from 'svelte';

export interface Mailbox5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox5 extends SvelteComponent<Mailbox5Props> {}
