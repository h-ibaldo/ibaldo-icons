import { SvelteComponent } from 'svelte';

export interface Mailbox1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox1 extends SvelteComponent<Mailbox1Props> {}
