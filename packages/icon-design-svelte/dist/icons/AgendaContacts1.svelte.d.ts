import { SvelteComponent } from 'svelte';

export interface AgendaContacts1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AgendaContacts1 extends SvelteComponent<AgendaContacts1Props> {}
