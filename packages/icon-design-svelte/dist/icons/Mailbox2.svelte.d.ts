import { SvelteComponent } from 'svelte';

export interface Mailbox2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Mailbox2 extends SvelteComponent<Mailbox2Props> {}
